exports.getAuth = (req, res, next)=>{
    const user = req.session.user
    if(user){
        next();
    }else{
        res.render('401', {user});
    } 
}