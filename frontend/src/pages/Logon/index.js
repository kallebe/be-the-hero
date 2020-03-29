import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import imgLogo from '../../assets/logo.svg';
import imgHeroes from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={imgLogo} alt="Be the Hero" />

                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
                    
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>

            <img src={imgHeroes} alt="Heroes" />
        </div>
    );
}