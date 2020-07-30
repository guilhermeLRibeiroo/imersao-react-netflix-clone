import React from 'react';
import LogoMain from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';

import { Link } from 'react-router-dom'; 

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={LogoMain} alt="AluraFlix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;