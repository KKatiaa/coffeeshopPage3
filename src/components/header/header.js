import '../header/header.scss';
import Vector from './Vector.png';

const Header = () => {
    return(
        <header className='backgroundPicture'>
            <div className="headerMenu">
                <img src={Vector} alt="beans" className="logo"/>
                <ul>
                    <li className='firtLeft'><a href="http://localhost:3000/">Coffee house</a></li>
                    <li className='left'><a href="http://localhost:3002/">Our coffee</a></li>
                    <li className='left'><a href="http://localhost:3001/">For your pleasure</a></li>
                </ul>             
            </div>
            <div className='centreText'>
                <h1>Our Coffee</h1>
            </div>
        </header>
    )
}

export default Header;