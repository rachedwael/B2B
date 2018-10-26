import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import './../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin/lib/bootstrap/css/bootstrap.min.css'
import './admin/lib/font-awesome/css/font-awesome.css'
import './admin/css/zabuto_calendar.css'
import './admin/lib/gritter/css/jquery.gritter.css'
import './admin/css/style.css'
import './admin/css/style-responsive.css'
import './admin/lib/chart-master/Chart.js'
import Asid from './menuAside/Asid';




class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div>
            <header class="header black-bg">
                <div class="sidebar-toggle-box">
                    <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                </div>
                <div><a class="logo"><b>WA<span>EL</span></b></a></div>
                <div className="navbar-container">
                    <div class="top-menu">
                        <ul className="menu-navbar">
                            <li className="nav-item">
                                <li className="nav-link" >{user.name}</li>
                            </li>
                            <li className="nav-item">
                            <ul class="nav pull-right top-menu">
                                <li><a href="#" className="nav-link profil-img" >
                                    <img src={user.avatar} alt={user.name} title={user.name}
                                        className="rounded-circle"
                                        style={{ width: '25px', marginRight: '5px' }} />
                                    </a>  
                                </li>
                                <li ><a class="logout"  onClick={this.onLogout.bind(this)} >Logout</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </header>
            <Asid />
            </div>




        )
        const guestLinks = (


            <header class="header black-bg">
                <div class="sidebar-toggle-box">
                    <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
                </div>
                <div><a class="logo"><b>WA<span>EL</span></b></a></div>
                <div className="navbar-container">
                    <div class="top-menu">
                        <ul className="menu-navbar">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Inscription</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Identifiez-vous</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {isAuthenticated ? authLinks : guestLinks}
            </div>

        )
    }
}








Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));