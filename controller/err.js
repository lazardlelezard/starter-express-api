exports.get404 = (req, res, next)=>{
    const user = req.session.user
    let isAdmin = false;
    if(user){
        if(user.email === ('bouderga.abdessamade@gmail.com' || 'lazard_0@protonmail.com' )){
            isAdmin = true;
        }else{
            isAdmin = false;
        }
    }

    res.render('404', {user, isAdmin})
}
