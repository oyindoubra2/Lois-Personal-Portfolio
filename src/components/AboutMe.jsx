import './AboutMe.css'
import NavBar from './Navbar';

function AboutMe () {
    return(

        <>
        {/* <NavBar></NavBar> */}
        <div className="About">
            <div className='AboutText'>
            <h1>About Me</h1>
            <p>I'm Lois, a web developer dedicated to crafting exceptional digital experiences. 
                With a passion for coding and an eye for design, I create responsive and user-friendly websites. 
                Let's bring your ideas to life. 
                Explore my portfolio and get in touch</p>
            </div>
            <div><img className='AboutImage' src="/Lois.jpeg" alt=""/></div>
        </div>
        </>


    )
}

export default AboutMe;
