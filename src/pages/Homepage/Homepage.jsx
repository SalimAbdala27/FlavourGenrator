import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <button>
          <Link to="/blond-leaf">Blond Leaf</Link>
          </button>
        </li>
        <li>
        <button>
          <Link to="/dark-leaf">Dark Leaf</Link>
          </button>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Homepage