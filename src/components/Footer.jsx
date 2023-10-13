import './Footer.css'

function Footer () {
    return (
        <footer>
            <div className='Socials'>
                <a href="#"><img className='icon' src="/LinkedIn.png" alt="" /></a>
                <a href="#"><img className='icon' src="/twitter.png" alt="" /></a>
                <a href="#"><img className='icon' src="/Instagram.png" alt="" /></a>
                <a href="#"><img className='icon' src="/Whatsapp.png" alt="" /></a>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </footer>
    )
}

export default Footer;