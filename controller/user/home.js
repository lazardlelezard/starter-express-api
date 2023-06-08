exports.getHome = (req, res, next)=>{
    const user = req.session.user
    let isAdmin = false;
    if(user){
        if((user.email === 'bouderga.abdessamade@gmail.com') || (user.email === 'lazard_0@protonmail.com' )){
            isAdmin = true;
        }else{
            isAdmin = false;
        }
    }
    res.render('home', {user, isAdmin})
}
exports.postHome = (req, res, next)=>{
    
}