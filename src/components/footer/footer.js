import '../footer/footer.scss';
import Vector3 from './Vector3.png';

const Footer = () => {
    return(
        <div className='footer'>
            <nav className="bheaderMenu">
                <img src={Vector3} alt="beans"/>
                <ul className='bul'>
                    <li className='bfirtLeft'><a href="http://localhost:3000/">Coffee house</a></li>
                    <li className='bleft'><a href="http://localhost:3002/">Our coffee</a></li>
                    <li className='bleft'><a href="http://localhost:3001/">For your pleasure</a></li>
                </ul>             
            </nav>
        </div>
    )
}

export default Footer;