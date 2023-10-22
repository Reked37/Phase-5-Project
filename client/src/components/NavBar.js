import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){

    return(
        <div className="navbar">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/players" >Players</NavLink>
            <NavLink to="/teams" >Teams</NavLink>
            <NavLink to="/coaches" >Coaches</NavLink>
            <NavLink to='/matches'>Matches</NavLink>
            <NavLink to="/add" >Add</NavLink>
        </div>
    )
}

export default Navbar