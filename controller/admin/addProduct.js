exports.getAddProduct = (req, res, next)=>{
    const user = req.session.user
    let isAdmin = false;
    if((user.email === 'bouderga.abdessamade@gmail.com') || (user.email === 'lazard_0@protonmail.com' )){
        isAdmin = true;
        res.render('addProduct', {user, isAdmin})
    }else{
      isAdmin = false;
        res.sendStatus(401)
    }
}
exports.postAddProduct = (req, res, next)=>{
    
}