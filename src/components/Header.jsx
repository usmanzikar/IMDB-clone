import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/IMDB.png';
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to={'/'}><img className='header__icon' src={logo} alt='logo'/></Link>
            <Link to={'/movies/popular'}><span>Popular</span></Link>
            <Link to={'/movies/top_rated'}><span>Top Rated</span></Link>
            <Link to={'/movies/upcoming'}><span>Upcomming</span></Link>

        </div>
    </div>
  )
}

export default Header