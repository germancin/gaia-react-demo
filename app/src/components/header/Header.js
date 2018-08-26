import React, { Component } from 'react';
import '../../assets/styles/header.css';
import logo from '../../assets/img/gaia-logo.svg';
import avatar from '../../assets/img/avatar.png';
import hamburguer from '../../assets/img/hamburguer.svg';

class Header extends Component {
    state = {
        navLinks: [
            'MY GAIA',
            'YOGA',
            'SEEKING TRUTH',
            'TRANSFORMATION',
            'FILMS & DOCS',
            'CENTERS'
        ],
        searchPlaceholder: 'Search...',
    }
    render() {
        return (
            <section>
                <header className="header">
                    <div className="header-top py-2 pt-3 px-4">
                        <div>
                            <img src={hamburguer} className='header-hamburguer-icon pr-2' alt='menu' />
                            <img src={logo} alt='logo' />
                        </div>
                        <div className="avatar">
                            <span className="avatar-name pr-2">German</span>
                            <span className="avatar-icon">
                                <img src={avatar} alt='avatar' />
                            </span>
                        </div>
                    </div>
                    <div className='header-nav border px-4'>
                        <div>
                            <ul className="nav">
                                {
                                    this.state.navLinks.map((link, i) => {
                                        return <li key={i} className='pr-4'>{link}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <input className='search' type='text' placeholder={this.state.searchPlaceholder} />
                        </div>
                    </div>
                </header>            
            </section>
        )
    }
}


export default Header;
