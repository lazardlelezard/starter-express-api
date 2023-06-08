const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

// user
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'veuillez entrer votre Email'],
        unique: true,
        validate: [validator.isEmail, 'Email invalide'],
        lowercase: true,
    },
    nom: {
        type:String,
        required: [true, 'Veuillez entrer un nom'],
        trim: true,
        vaildate: {
            validator: function (v){
                return /^(?=.*\d).{2,15}$/.test(v);
            },
            message: 'Le nom doit contenir entre 6 et 15 charactères'
        },
    },
    prenom: {
        type:String,
        required: [true, 'Veuillez entrer un nom'],
        trim: true,
        vaildate: {
            validator: function (v){
                return /^(?=.*\d).{2,15}$/.test(v);
            },
            message: 'Le nom doit contenir entre 6 et 15 charactères'
        },
    },
    mdp: {
        type: String,
        required: [true, "Veuillez entrer votre mot de passe"],
        trim: true,
        validate: {
          validator: function(v) {
            return /^(?=.*\d).{6,}$/.test(v);
          },
          message: "Le mot de passe doit contenir au moins 6 caractères dont au moins 1 chiffre"
        }
    }
}, { timestamps: true });
// enregistrement du mot de passe hashé

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('mdp')) return next();
    const hash = await bcrypt.hash(user.mdp, 10);
    user.mdp = hash;
    next();
  });

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;