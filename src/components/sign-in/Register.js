import React, { Component } from 'react';
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
import { connect } from 'react-redux';
import PropsTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { registerUser } from './../../actions/authentication'

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            secteur: '',
            pays: '',
            phone:'',
            aproved:false,
            type: 'entreprise',
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
            name: this.state.name,
            email: this.state.email,
            pays: this.state.pays,
            secteur: this.state.secteur,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            phone:this.state.phone,
            aproved:this.state.aproved,
            type: this.state.type
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.props
        console.log(errors)
        return (
            <div className="limiter abc">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form-title img-b2b" >
                            <span className="login100-form-title-1">
                                S'enregistrer
                            </span>
                        </div>

                        <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Nom de l'entreprise</span>
                                <input
                                    className='input100 '
                                    type="text" name="name"
                                    placeholder="Entrer le Nom de l'entreprise "
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                />
                                <span className="focus-input100 ">{errors.name}</span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Téléphone</span>
                                <input
                                    className='input100 '
                                    type="text" name="phone"
                                    placeholder="Entrer le numéro de Téléphone "
                                    onChange={this.handleInputChange}
                                    value={this.state.phone}
                                />
                                <span className="focus-input100 ">{errors.name}</span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-26" >
                                <span className="label-input100">Secteur d'activité</span>
                                <select className="form-control secteur-activite" type="text"
                                    name="secteur"
                                    onChange={this.handleInputChange}
                                    value={this.state.secteur}
                                >
                                    <option value="">Choisissez Votre secteur d'activité</option>
                                    <option value="Activités médicales et pharmaceutiques" class="DossierLabel">Activités médicales et pharmaceutiques</option>
                                    <option value="Agriculture et agro-alimentaire" class="DossierLabel">Agriculture et agro-alimentaire</option>
                                    <option value="Artisanat" class="DossierLabel">Artisanat</option>
                                    <option value="Autre" class="DossierLabel">Autre</option>
                                    <option value="Biens de consommation" class="DossierLabel">Biens de consommation</option>
                                    <option value="BTP" class="DossierLabel">BTP</option>
                                    <option value="Distribution" class="DossierLabel">Distribution</option>
                                    <option value="Energie" class="DossierLabel">Energie</option>
                                    <option value="Environnement" class="DossierLabel">Environnement</option>
                                    <option value="Industrie manufacturière" class="DossierLabel">Industrie manufacturière</option>
                                    <option value="Industrie textile" class="DossierLabel">Industrie textile</option>
                                    <option value="Services aux entreprises" class="DossierLabel">Services aux entreprises</option>
                                    <option value="Sous-traitance" class="DossierLabel">Sous-traitance</option>
                                    <option value="TIC" class="DossierLabel">TIC</option>
                                    <option value="Tourisme" class="DossierLabel">Tourisme</option>
                                    <option value="Transport et Logistique" class="DossierLabel">Transport et Logistique</option>
                                </select>
                                <span className="focus-input100 ">{errors.secteur}</span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
                                <span className="label-input100">Pays</span>

                                <select className="form-control secteur-activite" type="text"
                                    name="pays"
                                    onChange={this.handleInputChange}
                                    value={this.state.pays}
                                >
                                    <option value="">Votre Pays</option>
                                    <optgroup label="Afrique">
                                        <option value="afriqueDuSud">Afrique Du Sud</option>
                                        <option value="algerie">Algérie</option>
                                        <option value="angola">Angola</option>
                                        <option value="benin">Bénin</option>
                                        <option value="botswana">Botswana</option>
                                        <option value="burkina">Burkina</option>
                                        <option value="burundi">Burundi</option>
                                        <option value="cameroun">Cameroun</option>
                                        <option value="capVert">Cap-Vert</option>
                                        <option value="republiqueCentre-Africaine">République Centre-Africaine</option>
                                        <option value="comores">Comores</option>
                                        <option value="republiqueDemocratiqueDuCongo">République Démocratique Du Congo</option>
                                        <option value="congo">Congo</option>
                                        <option value="coteIvoire">Côte d'Ivoire</option>
                                        <option value="djibouti">Djibouti</option>
                                        <option value="egypte">Égypte</option>
                                        <option value="ethiopie">Éthiopie</option>
                                        <option value="erythrée">Érythrée</option>
                                        <option value="gabon">Gabon</option>
                                        <option value="gambie">Gambie</option>
                                        <option value="ghana">Ghana</option>
                                        <option value="guinee">Guinée</option>
                                        <option value="guinee-Bisseau">Guinée-Bisseau</option>
                                        <option value="guineeEquatoriale">Guinée Équatoriale</option>
                                        <option value="kenya">Kenya</option>
                                        <option value="lesotho">Lesotho</option>
                                        <option value="liberia">Liberia</option>
                                        <option value="libye">Libye</option>
                                        <option value="madagascar">Madagascar</option>
                                        <option value="malawi">Malawi</option>
                                        <option value="mali">Mali</option>
                                        <option value="maroc">Maroc</option>
                                        <option value="maurice">Maurice</option>
                                        <option value="mauritanie">Mauritanie</option>
                                        <option value="mozambique">Mozambique</option>
                                        <option value="namibie">Namibie</option>
                                        <option value="niger">Niger</option>
                                        <option value="nigeria">Nigeria</option>
                                        <option value="ouganda">Ouganda</option>
                                        <option value="rwanda">Rwanda</option>
                                        <option value="saoTomeEtPrincipe">Sao Tomé-et-Principe</option>
                                        <option value="senegal">Séngal</option>
                                        <option value="seychelles">Seychelles</option>
                                        <option value="sierra">Sierra</option>
                                        <option value="somalie">Somalie</option>
                                        <option value="soudan">Soudan</option>
                                        <option value="swaziland">Swaziland</option>
                                        <option value="tanzanie">Tanzanie</option>
                                        <option value="tchad">Tchad</option>
                                        <option value="togo">Togo</option>
                                        <option value="tunisie">Tunisie</option>
                                        <option value="zambie">Zambie</option>
                                        <option value="zimbabwe">Zimbabwe</option>
                                    </optgroup>
                                    <optgroup label="Amérique">
                                        <option value="antiguaEtBarbuda">Antigua-et-Barbuda</option>
                                        <option value="argentine">Argentine</option>
                                        <option value="bahamas">Bahamas</option>
                                        <option value="barbade">Barbade</option>
                                        <option value="belize">Belize</option>
                                        <option value="bolivie">Bolivie</option>
                                        <option value="bresil">Brésil</option>
                                        <option value="canada">Canada</option>
                                        <option value="chili">Chili</option>
                                        <option value="colombie">Colombie</option>
                                        <option value="costaRica">Costa Rica</option>
                                        <option value="cuba">Cuba</option>
                                        <option value="republiqueDominicaine">République Dominicaine</option>
                                        <option value="dominique">Dominique</option>
                                        <option value="equateur">Équateur</option>
                                        <option value="etatsUnis">États Unis</option>
                                        <option value="grenade">Grenade</option>
                                        <option value="guatemala">Guatemala</option>
                                        <option value="guyana">Guyana</option>
                                        <option value="haiti">Haïti</option>
                                        <option value="honduras">Honduras</option>
                                        <option value="jamaique">Jamaïque</option>
                                        <option value="mexique">Mexique</option>
                                        <option value="nicaragua">Nicaragua</option>
                                        <option value="panama">Panama</option>
                                        <option value="paraguay">Paraguay</option>
                                        <option value="perou">Pérou</option>
                                        <option value="saintCristopheEtNieves">Saint-Cristophe-et-Niévès</option>
                                        <option value="sainteLucie">Sainte-Lucie</option>
                                        <option value="saintVincentEtLesGrenadines">Saint-Vincent-et-les-Grenadines</option>
                                        <option value="salvador">Salvador</option>
                                        <option value="suriname">Suriname</option>
                                        <option value="triniteEtTobago">Trinité-et-Tobago</option>
                                        <option value="uruguay">Uruguay</option>
                                        <option value="venezuela">Venezuela</option>
                                    </optgroup>
                                    <optgroup label="Asie">
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="arabieSaoudite">Arabie Saoudite</option>
                                        <option value="armenie">Arménie</option>
                                        <option value="azerbaidjan">Azerbaïdjan</option>
                                        <option value="bahrein">Bahreïn</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="bhoutan">Bhoutan</option>
                                        <option value="birmanie">Birmanie</option>
                                        <option value="brunei">Brunéi</option>
                                        <option value="cambodge">Cambodge</option>
                                        <option value="chine">Chine</option>
                                        <option value="coreeDuSud">Corée Du Sud</option>
                                        <option value="coreeDuNord">Corée Du Nord</option>
                                        <option value="emiratsArabeUnis">Émirats Arabe Unis</option>
                                        <option value="georgie">Géorgie</option>
                                        <option value="inde">Inde</option>
                                        <option value="indonesie">Indonésie</option>
                                        <option value="iraq">Iraq</option>
                                        <option value="iran">Iran</option>
                                        <option value="israel">Israël</option>
                                        <option value="japon">Japon</option>
                                        <option value="jordanie">Jordanie</option>
                                        <option value="kazakhstan">Kazakhstan</option>
                                        <option value="kirghistan">Kirghistan</option>
                                        <option value="koweit">Koweït</option>
                                        <option value="laos">Laos</option>
                                        <option value="liban">Liban</option>
                                        <option value="malaisie">Malaisie</option>
                                        <option value="maldives">Maldives</option>
                                        <option value="mongolie">Mongolie</option>
                                        <option value="nepal">Népal</option>
                                        <option value="oman">Oman</option>
                                        <option value="ouzbekistan">Ouzbékistan</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="philippines">Philippines</option>
                                        <option value="qatar">Qatar</option>
                                        <option value="singapour">Singapour</option>
                                        <option value="sriLanka">Sri Lanka</option>
                                        <option value="syrie">Syrie</option>
                                        <option value="tadjikistan">Tadjikistan</option>
                                        <option value="taiwan">Taïwan</option>
                                        <option value="thailande">Thaïlande</option>
                                        <option value="timorOriental">Timor oriental</option>
                                        <option value="turkmenistan">Turkménistan</option>
                                        <option value="turquie">Turquie</option>
                                        <option value="vietNam">Viêt Nam</option>
                                        <option value="yemen">Yemen</option>
                                    </optgroup>
                                    <optgroup label="Europe">
                                        <option value="allemagne">Allemagne</option>
                                        <option value="albanie">Albanie</option>
                                        <option value="andorre">Andorre</option>
                                        <option value="autriche">Autriche</option>
                                        <option value="bielorussie">Biélorussie</option>
                                        <option value="belgique">Belgique</option>
                                        <option value="bosnieHerzegovine">Bosnie-Herzégovine</option>
                                        <option value="bulgarie">Bulgarie</option>
                                        <option value="croatie">Croatie</option>
                                        <option value="danemark">Danemark</option>
                                        <option value="espagne">Espagne</option>
                                        <option value="estonie">Estonie</option>
                                        <option value="finlande">Finlande</option>
                                        <option value="france">France</option>
                                        <option value="grece">Grèce</option>
                                        <option value="hongrie">Hongrie</option>
                                        <option value="irlande">Irlande</option>
                                        <option value="islande">Islande</option>
                                        <option value="italie">Italie</option>
                                        <option value="lettonie">Lettonie</option>
                                        <option value="liechtenstein">Liechtenstein</option>
                                        <option value="lituanie">Lituanie</option>
                                        <option value="luxembourg">Luxembourg</option>
                                        <option value="exRepubliqueYougoslaveDeMacedoine">Ex-République Yougoslave de Macédoine</option>
                                        <option value="malte">Malte</option>
                                        <option value="moldavie">Moldavie</option>
                                        <option value="monaco">Monaco</option>
                                        <option value="norvege">Norvège</option>
                                        <option value="paysBas">Pays-Bas</option>
                                        <option value="pologne">Pologne</option>
                                        <option value="portugal">Portugal</option>
                                        <option value="roumanie">Roumanie</option>
                                        <option value="royaumeUni">Royaume-Uni</option>
                                        <option value="russie">Russie</option>
                                        <option value="saintMarin">Saint-Marin</option>
                                        <option value="serbieEtMontenegro">Serbie-et-Monténégro</option>
                                        <option value="slovaquie">Slovaquie</option>
                                        <option value="slovenie">Slovénie</option>
                                        <option value="suede">Suède</option>
                                        <option value="suisse">Suisse</option>
                                        <option value="republiqueTcheque">République Tchèque</option>
                                        <option value="ukraine">Ukraine</option>
                                        <option value="vatican">Vatican</option>
                                    </optgroup>
                                    <optgroup label="Océanie">
                                        <option value="australie">Australie</option>
                                        <option value="fidji">Fidji</option>
                                        <option value="kiribati">Kiribati</option>
                                        <option value="marshall">Marshall</option>
                                        <option value="micronesie">Micronésie</option>
                                        <option value="nauru">Nauru</option>
                                        <option value="nouvelleZelande">Nouvelle-Zélande</option>
                                        <option value="palaos">Palaos</option>
                                        <option value="papouasieNouvelleGuinee">Papouasie-Nouvelle-Guinée</option>
                                        <option value="salomon">Salomon</option>
                                        <option value="samoa">Samoa</option>
                                        <option value="tonga">Tonga</option>
                                        <option value="tuvalu">Tuvalu</option>
                                        <option value="vanuatu">Vanuatu</option>
                                    </optgroup>
                                </select>
                                <span className="focus-input100 ">{errors.pays}</span>
                            </div>



                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="text" name="email" placeholder="Enter votre email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />
                                <span className="focus-input100 ">{errors.email}</span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-18">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="password" placeholder="Entrer votre mot de pass password"
                                    onChange={this.handleInputChange}
                                    value={this.state.password}
                                />
                                <span className="focus-input100 ">{errors.password}</span>
                            </div>

                            <div class="wrap-input100 validate-input m-b-18" data-validate="Confirm Password is required">
                                <span className="label-input100">Confirm Password</span>
                                <input className="input100" type="password" name="password_confirm"
                                    placeholder="Enter Confirm password"
                                    onChange={this.handleInputChange}
                                    value={this.state.password_confirm}
                                />
                                <span className="focus-input100 ">{errors.password_confirm}</span>
                            </div>

                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact100-form-checkbox">

                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div >


        )
    }
}

Register.PropsTypes = {
    registerUser: PropsTypes.func.isRequired,
    auth: PropsTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const RegisterContainer = connect(mapStateToProps, { registerUser })(withRouter(Register))

export default RegisterContainer;
