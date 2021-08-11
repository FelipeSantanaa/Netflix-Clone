import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href= "/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.6435-9/93773192_2855060907948660_4096470554872119296_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeFtgSoWh5xtinX5LAxgAHCFvnPCT7TcET6-c8JPtNwRPhGjPulwyX1EG_K87exZ58SAls2LJhDMmOAMw51a3Xhr&_nc_ohc=876Gf7Rl_LgAX_c6iqK&_nc_ht=scontent.fcgh7-1.fna&oh=2239713658924806caba557db298883b&oe=613B34A4" alt="Usuário" />
                </a>
                 
            </div>
        </header>
    );
}