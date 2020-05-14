import React from 'react';
import './Menu.css';
import { SearchBar } from './SearchBar';

const Menu = () => {
    return (
        <div className="Menu">
            <nav>
                <h2 className="logo">CloudyFerenc</h2>
                <ul className="nav-links">
                   <li className="SearchBar"><SearchBar/></li>
                    <li className="Button-forecast" ><a href="#">Forecast</a></li>
                    <li ><a href="#">Research</a></li>
                    <li> <i class="far fa-comment-dots fa-2x"><a href="#"></a></i></li>
                    <li> <i class="fab fa-github fa-2x"></i></li>
                    <li><i class="fas fa-user-circle fa-2x"></i></li>
                </ul>
            </nav>

        </div>
    )
}


export default Menu;