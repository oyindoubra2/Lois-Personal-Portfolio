import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
        <a id="logo" href="##">LZ</a>
        <ul className="nav-list">
        <li><a className="menu blue" href="/">Home</a></li>
        <li><a className="menu" href="/AboutMe">About</a></li>
        <li><a className="menu" href="/Portfolio">Porfolio</a></li>
        <li><a className="menu" href="/Contact">Contact Me</a></li>
        </ul>
        <img id="hamburger" src="/menu.svg" alt="menu" width={"24px"} height={"24px"}/>
  </nav>    
  )
}

export default NavBar;