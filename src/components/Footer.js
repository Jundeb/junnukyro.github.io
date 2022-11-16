import '../css/Footer.css';
import {TfiEmail} from 'react-icons/tfi';
import {BsTelephone} from 'react-icons/bs'
import {BsFillPinMapFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    return (
        <div id='contact' className='contact'>
            <div className='contact-content'>
                <div className='contact-info'>
                    <h1>Contact Info</h1>
                    <div className='line'></div>
                    <p><TfiEmail size={17} /> Junnukyro@outlook.com</p>
                    <p><BsTelephone size={17}/> +358405916229</p>
                    <p><BsFillPinMapFill size={17}/> Yliopistokatu 1B 512, Oulu</p>
                </div>
                <div className='line-center'></div>
                <div className='contact-links'>
                    <h1>Socials</h1>
                    <div className='line'></div>
                    <a className='contact-link' href='https://github.com/Jundeb' target='_blank'><AiFillGithub size={40} /></a>
                    <a className='contact-link' href='https://www.linkedin.com/in/junnu-kyr%C3%B6-87601922b/' target='_blank'><AiFillLinkedin size={40} /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;