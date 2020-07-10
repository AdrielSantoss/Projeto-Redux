import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length)

  return (
    <div className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo do projeto" />
      </Link>
      <Link className="reserva" to="/reservas">
        <strong>Minhas reservas</strong>
        <span>{reserveSize} reservas</span>
      </Link>

    </div>
  );
}