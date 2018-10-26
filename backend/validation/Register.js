const Validator = require('validator');
const isEmpty = require('./Empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';
    data.secteur = !isEmpty(data.secteur) ? data.secteur : '';
    data.pays = !isEmpty(data.pays) ? data.pays : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Password is required';
    }
    if(Validator.isEmpty(data.secteur)) {
        errors.secteur = 'secteur is required';
    }
    if(Validator.isEmpty(data.pays)) {
        errors.pays = 'pays is required';
    }
    if(!Validator.isLength(data.phone, { min: 8, max: 30 })) {
        errors.name = 'phone must be between 8 to 30 chars';
    }
    
    if(Validator.isEmpty(data.phone)) {
        errors.name = 'phone field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}