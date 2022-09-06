module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

exports.signUp =  function(req, res){
    return res.render('user_sign_up', {title:"Codeial | Sign Up"});
}

exports.signIn = function(req,res){
    return res.render('user_sign_in', {title:"Codeial | Sign In"});
}

exports.create = function(req,res){
    //Todo
}

exports.createSession = function(req,res){
    //Todo
    
}
