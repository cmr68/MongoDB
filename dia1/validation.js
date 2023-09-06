const mongoose = require("mongoose");

//Validacion de User
const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        enum: ["ivancito", "ivanchu"] 
    },
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >= 6;
            },
            'El password deberia ser mas largo'
        ],
        select: false
    },

})

//Validacion de Profile
const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ["ivan", "Ivan"]
    },
    surname: {
        type: String,
        required: true
    },
    dataOfBrith: {
        type: Number,
        required: true
    },
    Comments: {
        type: String
    },
    rol: {
        type: String,
        required: true
    }
})

//Validacion de Creedentials
const CredentialsSchema = new mongoose.Schema({
    adrees: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        validate: [
            function(phone){
                return phone.lenght = 9;
            },
            'El telefono no tiene 9 digitos'
        ],
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


//------------- Middleware --------------

//User
UserSchema.pre('save', function(next){
    console.log("Middleware de entrada");
    if(this.login.length > 5){
        console.log("Login mayor de 5 caracteres");
        next();
    }else{
        console.log("El nombre del usuario debe ser más largo");
    }
})

//Profile
ProfileSchema.pre('save', function(next){
    console.log("Middleware de entrada");
    if(this.dataOfBrith < 2005){
        console.log("Debe ser mayor de edad");
        next();
    }else{
        console.log("Mayor de edad");
    }
})

//Creedentials
CredentialsSchema.pre('save', function(next){
    console.log("Middleware de entrada");
    if(this.phone[0] != 6){
        console.log("Extensión errónea");
        next();
    }else{
        console.log("Extension correcta");
    }
})