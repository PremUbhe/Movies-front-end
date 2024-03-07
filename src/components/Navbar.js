import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

    return (
        <div className='bg-black flex justify-around items-center h-20'>
            <h1 className='text-blue-300 text-4xl'>Movies</h1>
            <ul className='list-none flex text-white justify-around'>
                <li className='mx-2'><NavLink to='/home'>Home</NavLink></li>
                <li className='mx-2'><NavLink to='/movie'>Movies</NavLink></li>
                <li className='mx-2'><NavLink to='/tv'>TV</NavLink></li>
            </ul>
        </div>
    )
}
