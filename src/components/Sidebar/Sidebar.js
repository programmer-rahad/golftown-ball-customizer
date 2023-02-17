import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import './Sidebar.scss'

function Sidebar() {
  const [filter, setFilter] = React.useState(0);
  return (
    <div className='left-sidebar'>
      <h3 className="text-uppercase">Select Your Ball</h3>
      <div className="category-filter">
        <h4 onClick={() => setFilter(!filter)}>Filter by Brand {
          filter ? <FaAngleUp className='d-md-none ms-1 text-green' /> : <FaAngleDown className='text-green d-md-none ms-1' />
        } </h4>
        <form action="#">
          <ul className={`text-uppercase ${filter ? 'show-filter' : ''}`}>
            <li className='d-flex align-items-center'>
              <label className='d-flex' htmlFor="filter-1">
                <input className='d-none' type="checkbox" id='filter-1' />
                <span>
                  <i>✓</i>
                </span>
                <span>
                  TITLEIST
                </span>
              </label>
            </li>
            <li className='d-flex align-items-center'>
              <label className='d-flex' htmlFor="filter-2">
                <input className='d-none' type="checkbox" id='filter-2' />
                <span>
                  <i>✓</i>
                </span>
                <span>
                  TAYLORMADE
                </span>
              </label>
            </li>
            <li className='d-flex align-items-center'>
              <label className='d-flex' htmlFor="filter-3">
                <input className='d-none' type="checkbox" id='filter-3' />
                <span>
                  <i>✓</i>
                </span>
                <span>
                  CALLAWAY
                </span>
              </label>
            </li>
            <li className='d-flex align-items-center'>
              <label className='d-flex' htmlFor="filter-4">
                <input className='d-none' type="checkbox" id='filter-4' />
                <span>
                  <i>✓</i>
                </span>
                <span>
                  BRIDGESTONE
                </span>
              </label>
            </li>
            <li className='d-flex align-items-center'>
              <label className='d-flex' htmlFor="filter-5">
                <input className='d-none' type="checkbox" id='filter-5' />
                <span>
                  <i>✓</i>
                </span>
                <span>
                  SRIXON
                </span>
              </label>
            </li>
            <li className='d-flex align-items-center'>
              <label className='d-flex' htmlFor="filter-6">
                <input className='d-none' type="checkbox" id='filter-6' />
                <span>
                  <i>✓</i>
                </span>
                <span>
                  SHOW ALL
                </span>
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Sidebar