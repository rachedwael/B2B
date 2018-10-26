import React, { Component } from 'react';
import { connect } from 'react-redux';
class Entreprise extends Component {

    componentDidMount(){
        if(!this.props.auth.isAuthenticated || this.props.auth.user.type!=="entreprise") {
            this.props.history.push('/'+this.props.auth.user.type)
            console.log('zabour omek emchi :',this.props.auth.user.type)
        }
        else
        this.props.history.push('/entreprise')    
    }


    render() {

        return (
            <div className="admin-container">
                Entreprise Espace
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
const EntrepriseContainer=connect(mapStateToProps)(Entreprise)
export  default EntrepriseContainer