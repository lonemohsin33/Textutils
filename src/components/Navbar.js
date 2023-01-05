import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        <Link className="nav-link" to="/about">{props.about}</Link>
      </div>
    </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.darkMode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label> &nbsp;
    </div>

      <div className={`form-check form-switch text-${props.mode==='light'?'blue':'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.purpleMode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Purple Mode</label>
   
</div>
  </div>
  
</nav>
  )
}
Navbar.propTypes = {title:PropTypes.string.isRequired,
                home:PropTypes.string.isRequired,
                about:PropTypes.string
                }
