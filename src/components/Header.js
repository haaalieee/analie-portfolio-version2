import React from 'react';
import headertext from './headertext.svg';

class Header extends React.Component {
    render(){
        return (
            <div className="header-fold">
                <div className="hero-section" id="hero-section-a">
                    <img src={headertext} className="responsive headTwo" alt="headertext" />
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-1-TEXT.png" className="responsive headOne" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-TV-1.png" className="responsive head-image front" alt="alie"/>
                </div>
                <div className="hero-section" id="hero-section-a">
                    <img src="/images/AP-SEC-TV-2.png" className="responsive head-image left " alt="alie2"/>
                </div>
            </div>
        )
    }
}

export default Header;