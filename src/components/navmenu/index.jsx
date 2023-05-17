import React from "react";
import { Link } from 'react-router-dom';

const NavMenu = ({className, paths}) => {
    
    return (
        <ul className={className}>
            {
                paths.map((path) => (
                    (path.submenu ? 
                        <li key={Math.random()}><Link to={path.href}> {path.name} <i className="fa fa-angle-down"></i> </Link>
                            <ul className="submenu">
                                {
                                    path.paths.map((p) => (
                                        <li key={Math.random()}><Link to={p.href}>{p.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </li>
                        :
                        <li><Link to={path.href}> {path.name} </Link></li>
                    )
                ))
            }
        </ul>
    )
}

export default NavMenu;