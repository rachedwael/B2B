const express = require('express');
const router = express.Router();
const gravatar = require('nodejs-gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const { ObjectID } = require('mongodb')
const User = require('../models/User');



router.get('/list', function(req, res){
    User.find((err, data)=>{
        if(err){ res.send('contact not Find')}
        else  res.send(data);
    });
});

router.post('/register', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'Email already exists'
            });
        }
        else {
            const avatar = gravatar.imageUrl(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                secteur:req.body.secteur,
                pays:req.body.pays,
                type:req.body.type,
                aproved:req.body.aproved,
                phone:req.body.phone,
                avatar,
            });
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                }); 
                        }
                    });
                }
            });
        }
    });
});

    router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    const type=req.body.type;
    User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user.id,
                                name: user.name,
                                avatar: user.avatar,
                                type:user.type,
                                secteur:user.secteur,
                                pays:user.pays,
                                phone:user.phone,
                                aproved:user.aproved
                            }
                            jwt.sign(payload, 'secret', {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        type:req.user.type,
    });
    
});



// route.delete('/delete-user/:id', (req, res) => {
//     let idDelete = ObjectID(req.params.id)
//     User.findOneAndDelete({ _id: idDelete }, (err, data) => {
//         if (err) res.send('user not deleted')
//         else
//             res.send(data)
//     })
// })

router.delete('/delete-user/:id',(req, res) => {
    User.findByIdAndRemove(ObjectID(req.params.id))
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
});

router.put('/aproved_user/:id', (request, response) => {
    let idC = ObjectID(request.params.id)
    let aprovedUser = request.body.aproved
    User.findOneAndUpdate({ _id: idC }, { $set: {aproved:!request.body.aproved}}, (err, data) => {
        if (err)
            response.send("nooooooooooo")
        else
            response.send(data)
    })
})
router.get('/aproved_user_get/:id', function(req, res){
    let idC = ObjectID(request.params.id)
    User.findById( {_id: idC} ,(err, data)=>{
        if(err){ res.send('contact not Find')}
        else  res.send(data);
    });
});


module.exports = router;