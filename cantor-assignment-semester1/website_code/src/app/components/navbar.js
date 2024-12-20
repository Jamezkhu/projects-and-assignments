/* Navbar Code*/
'use client'
import Link from 'next/link';
import "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    {
        return (

            <nav>
                <button className='burger' onClick={toggleMenu}>&#9776;</button>
                
                <menu className={menuOpen ? "active" : ""}>
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/computing-courses" onClick={toggleMenu}>Computing Courses</Link></li>
                    <li><Link href="/art-and-design-courses" onClick={toggleMenu}>Art and Design Courses</Link></li>
                    <li><Link href="/facilities" onClick={toggleMenu}>Facilities</Link></li>
                    <li><Link href="/learning-resources" onClick={toggleMenu}>Learning Resources</Link></li>
                    <li><Link href="/information-for-staff" onClick={toggleMenu}>Information for Staff</Link></li>
                    <li><Link href="/information-for-students" onClick={toggleMenu}>Information for Students</Link></li>
                    <li><Link href="/working-with-business" onClick={toggleMenu}>Working with Business</Link></li>
                </menu>
            </nav>

        );
    }
}
export default Navbar;