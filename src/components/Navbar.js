import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
    const [i, set] = useState(0)
    return (
        <div>
            <ul className="nav justify-content-center nav-tabs bg-primary pt-5">
                <li className="nav-item">
                    <Link to="/" className={i===0?"nav-link active":"nav-link"} aria-current="page" onClick={()=>set(0)}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/exercise" className={i===1?"nav-link active":"nav-link"} onClick={()=>set(1)}>Exercises</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className={i===2?"nav-link active":"nav-link"} onClick={()=>set(2)}>About</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
