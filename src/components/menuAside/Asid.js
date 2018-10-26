import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './admin/lib/jquery/jquery.min.js'
// import './admin/lib/common-scripts.js'
import './../admin/lib/bootstrap/css/bootstrap.min.css'
import './../admin/lib/font-awesome/css/font-awesome.css'
import './../admin/css/zabuto_calendar.css'
import './../admin/lib/gritter/css/jquery.gritter.css'
import './../admin/css/style.css'
import './../admin/css/style-responsive.css'
import './../admin/lib/chart-master/Chart.js'
import './asid.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Asid extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            class:false,
            classnom:"active"
        }
    }


    render() {
        const { user } = this.props.auth;
        return (
            <div id="sidebar" className="nav-collapse ">
                <ul className="sidebar-menu" id="nav-accordion">
                    <p className="centered"><a href="profile.html"><img src={user.avatar} className="img-circle" style={{width:"80px"}} /></a></p>
                        <h5 className="centered">{user.name}</h5>
                        <li className="mt">
                              {user.type=="admin"?
                                <div class="vertical-menu" >
                                <a href="#"  >Home</a>
                                <a href="#" >Liste Entreprises</a>
                                <a href="#">Liste Participants</a>
                                <a href="#">RDV B2B </a>
                                <a href="#">Demande d'inscription</a>
                                </div>
                                :user.type=="entreprise"?
                                <div class="vertical-menu" >
                                <a href="#"  >Home</a>
                                <a href="#" >Profil</a>
                                <a href="#">Liste Entreprises Participantes</a>
                                <a href="#">Catalogue </a>
                                <a href="#">Calendrier des Rdv</a>
                                </div>
                                :user.type=="chefDelegation"?
                                <div class="vertical-menu" >
                                <a href="#">Home</a>
                                <a href="#" >Liste de vos Entreprises</a>
                                <a href="#">Liste Participants</a>
                                <a href="#">Liste Entreprises Participantes</a>
                                <a href="#">Catalogue </a>
                                <a href="#">RDV B2B </a>
                                <a href="#">Calendrier des Rdv</a>
                                </div>:""
                            }
                        </li>
            </ul>
            </div>
                );
            }
        }
        
        
        const mapStateToProps = (state) => ({
            auth: state.auth
        })
        
        export default connect(mapStateToProps,)(withRouter(Asid));