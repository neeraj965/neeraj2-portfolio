import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>neeerajpratapsingh7080@gmail.com</span>
            <div className="f-icons">
            <a href='https://www.instagram.com/neerajrajpratapsingh'><Insta color='white' size='3rem'/></a>
                <a href='https://www.linkedin.com/in/neeraj-pratap-singh-071509238/'><LinkedIn color='white' size='3rem'/></a>
                <a href='https://github.com/neeraj965'><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer