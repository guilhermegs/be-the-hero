import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'

import './styles.css';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>
                    
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroesImage} alt="Heroes"/>
        </div>
    );
}