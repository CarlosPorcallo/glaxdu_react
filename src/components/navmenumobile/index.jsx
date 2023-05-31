import React from "react";
import { Link } from 'react-router-dom';

const NavMenuMobile = ({className, paths}) => {
    
    return (
        <ul className={className}>
            {
                paths.map((path) => (
                    (path.submenu ? 
                        <li key={Math.random()}>
                            <Link to={path.href}> {path.name} </Link>
                            <ul className={className == undefined ? "submenu" : null}>
                                {
                                    path.paths.map((p) => (
                                        <li key={Math.random()}><Link to={p.href}>{p.name}</Link></li>
                                    ))
                                }
                            </ul>
                            <a className="mean-expand">+</a>
                            <a className="mean-expand mean-clicked">-</a>
                        </li>
                        :
                        <li key={Math.random()}><Link to={path.href}> {path.name} </Link></li>
                    )
                ))
            }
        </ul>
    )
}

export default NavMenuMobile;