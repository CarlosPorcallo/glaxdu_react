import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavMenu = ({className, paths}) => {
    
    return (
        <ul className={className}>
            {
                paths.map((path) => (
                    (path.submenu ? 
                        <li><a href={path.href}> {path.name} <i className="fa fa-angle-down"></i> </a>
                            <ul className="submenu">
                                {
                                    path.paths.map((p) => (
                                        <li><Link to={p.href}>{p.name}</Link></li>
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