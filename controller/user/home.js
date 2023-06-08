exports.getHome = async (req, res, next)=>{
    const user = req.session.user
    let isAdmin = false;
    if(user){
        if((user.email === 'bouderga.abdessamade@gmail.com') || (user.email === 'lazard_0@protonmail.com' )){
            isAdmin = true;
        }else{
            isAdmin = false;
        }
    }
    try {
        res.render('home', { user, isAdmin });
      } catch (err) {
        console.log(err);
      }
}
exports.postHome = (req, res, next)=>{
    
}