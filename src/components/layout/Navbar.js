import React from 'react';
const Navbar = () => {
    return (
        <nav className="custom-navbar" >
            <div className="custom-navbar__logo-container">
                <img className="custom-navbar__logo" src="http://placehold.it/100/100" alt="" />
            </div>
            <div className="custom-navbar__content">
                <div className="custom-navbar__links">
                    <a href="" className="custom-navbar__link">How to use</a>
                    <span className="custom-navbar__vertical-line"></span>
                    <a href="" className="custom-navbar__link">privacy</a>
                </div>

                <div className="custom-navbar__buttons">
                    <a href="" className="custom-navbar__button custom-btn custom-btn--white">Login</a>
                    <a href="" className="custom-navbar__button custom-btn custom-btn--white">Signup</a>
                </div>

            </div>

        </nav >

    );
}

export default Navbar;