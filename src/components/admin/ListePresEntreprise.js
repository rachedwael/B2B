
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import './../../App.css'
import axios from 'axios'

class ListePresEntreprise extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };




    componentWillMount() {
        axios
            .get("/api/users/list")
            .then(res =>
                this.setState({
                    list: res.data
                })
            )
            .catch(err => console.log("err"));
    }

    aprovedUser = (el) => {
        console.log(el._id)
        console.log(el.aproved)
        axios.put("/api/users/aproved_user/" + el._id, true).then(res =>
            axios.get("/api/users/list").then(res => this.updateUserList(res.data))
        )
            .catch(err => alert(err));
    }

    deleteItem = (el) => {
        if (window.confirm("voulez vous supprime???")) {
            axios.delete("/api/users/delete-user/" + el._id)
            .then(res =>
                axios.get("/api/users/list").then(res => this.updateUserList(res.data))
            )
            .catch(err => alert(err));
        }
    }


    updateUserList = (value) => {
        this.setState({ list: value })
    }




    render() {
        const { auth } = this.props
        const { list } = this.state
        return (
            <div className="">
                <table class="table table-dark table-contact">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nom de l'entreprise</th>
                            <th scope="col">Email</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Secteur d'activité</th>
                            <th scope="col">Pays</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((el, i) => {
                            return (
                                <tr className="contact-line">
                                    <th scope="row">{i + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.phone}</td>
                                    <td>{el.secteur}</td>
                                    <td>{el.pays}</td>
                                    <td>
                                        <button class="btn btn-success btn-contact" data-toggle="confirmation" onClick={() => this.aprovedUser(el)}>Approuver</button>
                                        <button type="button" class="btn btn-primary btn-contact" >Modifier</button>
                                        <button type="button" class="btn btn-danger btn-contact" onClick={() => { this.deleteItem(el) }}>supprimer</button>
                                    </td>
                                </tr>
                            )
                        })}



                    </tbody>
                </table>
                <div style={styles}>
                    <h2>react-responsive-modal</h2>
                    <button onClick={this.onOpenModal}>Open modal</button>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <h2>Simple centered modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                            hendrerit risus, sed porttitor quam.
                        </p>
                    </Modal>
                </div>
            </div>
        );
    }
}




const mapStateToProps = (state) => ({
    auth: state.auth
})
const ListePresEntrepriseContainer = connect(mapStateToProps)(ListePresEntreprise)
export default ListePresEntrepriseContainer
