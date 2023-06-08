const User = require('../../models/user')

exports.getInscription = (req, res, next)=>{

    res.render('inscription')
}
exports.postInscription = (req, res, next)=>{
    const {email, nom, prenom, mdp, mdpv} = req.body;
    if(mdp === mdpv){
        const user = new User({
            email:      email,
            nom:        nom,
            prenom:     prenom,
            mdp:        mdp,
        }) 
        user.save()
            .then((user)=>{
    
                res.cookie('inscription_ok', 'true')
                console.log('inscription ok !')
                
                req.session.user = user 
                if(req.session.user){
                    res.redirect('/')
                    console.log('session ouverte : ' + req.session.user)   
                } else {
                    console.log('session non ouverte')
                    res.send(res.seesion)
                }
    
            })
            .catch((err)=> {
                console.log(`une erreur est survenue : ${err}`)
                res.render('inscription')
            })
    }else{
        res.redirect('/inscription')
        console.log('erreur lors de l\'inscription, votre mot de passe de confiramation ne correspond pas à votre mot de passe')
    }
}