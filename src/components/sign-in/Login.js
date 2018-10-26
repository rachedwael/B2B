import "bootstrap/dist/css/bootstrap.min.css";
import './css/main.css';
import './css/util.css';
import './vendor/daterangepicker/daterangepicker.css'
import './vendor/select2/select2.min.css'
import './vendor/animsition/css/animsition.min.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/animate/animate.css'
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './vendor/bootstrap/css/bootstrap.min.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from './../../actions/authentication';

class Login extends Component {

	constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
	}
    // componentDidMount() {
    //     if(this.props.auth.isAuthenticated && this.props.auth.user.type==="admin") {
    //         this.props.history.push('/admin')
    //     }
    //     //else this.props.history.push('/');
    // }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // //     else if(nextProps.auth.isAuthenticated && nextProps.auth.user.type==="entreprise") {
    // //     this.props.history.push('/entreprise')
    // // }
    // // else if(nextProps.auth.isAuthenticated && nextProps.auth.user.type==="chefDelegation") {
    // //     this.props.history.push('/chefDelegation')
    // // }
    // // else
    // // this.props.history.push('/')
    // // else if(nextProps.auth.isAuthenticated && nextProps.auth.user.type==="admin") {
    // //     this.props.history.push('/admin')
    // // }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if (nextProps.auth.isAuthenticated && nextProps.auth.user.type==="admin") {
            this.props.history.push('/admin')
        }
        else if(nextProps.auth.isAuthenticated && nextProps.auth.user.type==="chefDelegation") {
        this.props.history.push('/chefDelegation')}
        else if(nextProps.auth.isAuthenticated && nextProps.auth.user.type==="entreprise") {
        this.props.history.push('/entreprise')}
        
    }

    // componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }
	
  render() {
    const {errors} = this.state;
    const{auth}=this.props  
      console.log(errors)
      console.log("auth",auth)
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form-title" >
					<span className="login100-form-title-1">
                    Identifiez-vous
					</span>
				</div>

				<form className="login100-form validate-form" onSubmit={ this.handleSubmit }>
						<div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
                            <span className="label-input100">Email</span>
                            <input className="input100" type="text" name="email" placeholder="Enter email"
                            onChange={ this.handleInputChange }
                   		    value={ this.state.email }
                            />
                            <span className="focus-input100 ">{errors.email}</span>
                        </div>

						<div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                            <span className="label-input100">Password</span>
                            <input className="input100" type="password" name="password" placeholder="Enter password"
                            onChange={ this.handleInputChange }
                   		    value={ this.state.password }
                            />
                             <span className="focus-input100 ">{errors.password}</span>
                        </div>
						<div className="flex-sb-m w-full p-b-30">
                            <div className="contact100-form-checkbox">
                                
                            </div>
                        </div>
						<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	
	</div>
    );
  }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)