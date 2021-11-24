/*
 * @Description: 
 * @Author: F-Stone
 * @Date: 2021-11-24 18:09:34
 * @LastEditTime: 2021-11-24 19:44:58
 * @LastEditors: F-Stone
 */
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">POST LIST</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
