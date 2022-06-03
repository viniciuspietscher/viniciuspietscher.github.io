import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h2 className='nav--main'>
        <Link to='/'>Vinicius Pietscher</Link>
      </h2>
      <ul className='nav--list'>
        <li className='nav--item'>
          <Link to='/'>Home</Link>
        </li>
        {/* <li className='nav--item'>
          <a href='#'>Projects</a>
        </li> */}
        <li className='nav--item'>
          <Link to='resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
