import React, { Component } from 'react';
import { connect } from 'react-redux';
class ChefDelegation extends Component {

    componentDidMount(){
        if(!this.props.auth.isAuthenticated || this.props.auth.user.type!=="chefDelegation") {
            this.props.history.push('/'+this.props.auth.user.type)
            console.log('zabour omek emchi :',this.props.auth.user.type)
        }
        else
        this.props.history.push('/chefDelegation')    
    }

    render() {
        const{auth}=this.props
        return (
            <div className="admin-container">
                Chef delegation Espace
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
const ChefDelegationContainer=connect(mapStateToProps)(ChefDelegation)
export  default ChefDelegationContainer
