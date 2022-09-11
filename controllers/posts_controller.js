const Post = require('../models/post')
const Comment = require('../models/comment');
module.exports.create = function(req, res){
    Post.create({
        
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
         if(err){
            // console.log('error in creating a post');
            req.flash('error', err);
            return res.redirect('back');
        }
        req.flash('success', 'Post created successfully');
        return res.redirect('back');
    });
}

module.exports.destroy = function(req, res){
    Post.findById(req.params.id, function(err, post){
        if(post.user == req.user.id){
            post.remove();

            Comment.deleteMany({post:req.params.id}, function(err){
                if(err){
                    req.flash('error', err);
                    return res.redirect('back');
                }

                req.flash('success', 'Post and its associated comments deleted');
                return res.redirect('back');
            });
        }
        else{
            req.flash('err', 'You are not authorized to delete the post');
            return res.redirect('back');
        }
    })
}