const mongoose = require("mongoose");
const User = require("./userMDB");
const Profile = require("./profileMDB");
const Credeentials = require("./creedentialsMDB");

mongoose.connect('mongodb+srv://cristinamrico18:Codenotch.11@codenotch2.boooxxw.mongodb.net/',
                {useNewUrlParser: false, useUnifiedTopology:false})

//User
let userDocument = new User({
    login: "Pedro",
    password: "12345678"
});

userDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

//Profile
let profileDocument = new Profile({
    name: "Ivan",
    surname: "Martinez",
    dateOfBrith: 1990,
    Comments: "Soy muy feliz",
    rol: "artista"
});

profileDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

//Creedentials
let creedentialsDocument = new Credeentials({
    address: "calle a ninguna parte",
    phone: 6830287347,
    email: "ivancito@gmail.com"
});

creedentialsDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})