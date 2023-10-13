import './Portfolio.css'
// import NavBar from './Navbar';

function Portfolio (){
    return(
        <>
        {/* <NavBar></NavBar> */}
        <div className='Projects'>
            <h1 className='head'>Portfolio</h1>
           <div className='Cards'>
                <div className="Card">
                    <img src="/Desktopview.jpg" alt="" />
                    <a href="#"><button className='More'>Read More</button></a>

                </div>
                <div className="Card">
                <img src="/Desktopview.jpg" alt="" />
                <a href="#"><button className='More'>Read More</button></a>


                </div>
                <div className="Card">
                <img src="/Desktopview.jpg" alt="" />
                <a href="#"><button className='More'>Read More</button></a>


                </div>
                <div className="Card">
                <img src="/Desktopview.jpg" alt="" />
                <a href="#"><button className='More'>Read More</button></a>


                </div>
           </div>
        </div>
        </>
    )
}

export default Portfolio;