import React from 'react'
import './Styles/TopBar.css'
import {
    FaPhoneAlt,
    FaGripLinesVertical,
    FaLaptopCode,

    FaFacebookF,
    FaInstagram,
    FaTiktok
} from "react-icons/fa";

import {
    RiInstagramFill,
    RiWhatsappFill
} from "react-icons/ri";

function TopBar() {

    return (
        <>
            <div className='container-topBar'>
                <div className='text-left'>

                    <small>
                        <FaPhoneAlt />
                    </small>
                    <small>
                        965 841 843
                    </small>
                    <small className='inseccion'>
                        <FaGripLinesVertical />
                    </small>
                    <small>
                        <FaLaptopCode />
                    </small>
                    <small>
                        Un mundo Online
                    </small>
                </div>
                <div className='text-rigth'>
                    <small className='icons-rigth'>
                        Siguenos en nuestras redes:
                        <a href="https://www.facebook.com/">
                            <li> <FaFacebookF /> </li>
                        </a>
                        <a href="https://www.instagram.com/">
                            <li> <RiInstagramFill /> </li>
                        </a>
                        <a href="https://www.tiktok.com/">
                            <li> <FaTiktok /> </li>
                        </a>
                        <a href="https://www.whatsapp.com/">
                            <li> <RiWhatsappFill /> </li>
                        </a>
                    </small>
                </div>
            </div>
        </>
    );
}

export default TopBar;
