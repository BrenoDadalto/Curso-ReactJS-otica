import React from 'react';
import './topo.css';

function Topo() {
    return (
        <header className="limitar-secao">
            <div className='header-secao'>
                <img src="assets/logo.png" alt="logo" width="150" height="40" />
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

export default Topo;
