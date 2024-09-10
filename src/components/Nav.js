import React from 'react'

const Nav = () => {
  return (
    <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
            <a className="nav-link active" href="#">Top Stories</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Most Popular</a>
        </li>
        </ul>
    </div>
  )
}

export default Nav;
