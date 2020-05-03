import * as React from 'react';
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const logoImg = require("../../assets/logo_200.png") as string;
const sidebarBgImage = require("../../assets/sidebar-4.jpg") as string;

const sidebarBackground = {
    backgroundImage: `url("${sidebarBgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

const LeftMenu: React.FC = () => {

    let [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return (leftMenuVisibility) ? "" : "collapsed";
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-bolt"></i>
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
                id="collapseMenu">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/sites/SharePointAcademy#/Home">
                    {/* <div className="sidebar-brand-icon icon-green rotate-n-15">
                        <i className="fas fa-bolt"></i>
                    </div> */}
                    <div className="sidebar-brand-text mx-3"><img className="logo" src={logoImg}/></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <Link className="nav-link" to="Home">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Painel</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Armazén
                </div>

                <li className="nav-item">
                    <Link className="nav-link" to={`/products`}>
                        <i className="fas fa-fw fa-warehouse"></i>
                        <span>Produtos</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/orders`}>
                        <i className="fas fa-fw fa-dollar-sign"></i>
                        <span>Pedidos</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Admin
                </div>


                <li className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Usuários</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        </Fragment>
    );
};

export default LeftMenu;
