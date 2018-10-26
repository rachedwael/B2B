
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import './../../App.css'
import ListePresEntrepriseContainer from './ListePresEntreprise';




class Admin extends Component {

    componentDidMount() {
        if (!this.props.auth.isAuthenticated || this.props.auth.user.type !== "admin") {
            this.props.history.push('/'+this.props.auth.user.type)
        }
    }

    

    render() {
        const { user } = this.props.auth
        return (
            <div className="admin-container">
                <ListePresEntrepriseContainer/>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})
const AdminContainer = connect(mapStateToProps)(Admin)
export default AdminContainer
