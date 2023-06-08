const User = require('../../models/user')
const bcrypt = require('bcrypt')

exports.getConnexion = (req, res, next)=>{

  res.render('connexion')
}
exports.postConnexion = (req, res, next)=>{
    const {email, mdp} = req.body;

    console.log('email : ' + email)
    console.log('mdp : ' + mdp)
 
    User.find()
    .then((user) => {
        const foundUser = user.some(u => u.email === email && bcrypt.compareSync(mdp, u.mdp));
        if (foundUser) {
          const currentUser = user.find(u => u.email === email);
          console.log(`Connexion REUSSIE ! bienvenue ${currentUser.prenom}`);
          req.session.user = currentUser;
          console.log('ma user session : ' + req.session.user);
          res.redirect('/');
        } else {
          res.render('/')
          console.log('erreur lors de votre connexion, mot de passe ou email invalide')
        }
      })
        .catch((err) =>{
            console.log(err)
        })
}