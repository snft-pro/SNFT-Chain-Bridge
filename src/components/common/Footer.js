import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/style/common/footer.scss";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className='app_footer'>
        {/* <Container fluid> */}
        <div className='footer_text_wrap'>
          <ul>
            <h5 style={{marginLeft:"100px", color:"white", fontSize:"12px", fontWeight:"400" }}>SNFT © 2024 - all Rights Reserved</h5>
          </ul>
        </div>
        <div className='footer_text_wrap'>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className='footer_icn_wrap'>
          <ul>
          <Link 
            style={{marginRight:"100px", color:"white", fontSize:"12px", fontWeight:"400"}} to="https://tally.so/r/n911bE" target='_blank'>Support </Link>
            
            <li><Link to="https://x.com/snftpro" target='_blank'><AiFillTwitterCircle /></Link></li>
            <li><Link to="https://www.linkedin.com/company/snft/" target='_blank'><AiFillLinkedin /></Link></li>
            <li><Link style={{marginRight:"100px"}}to="https://github.com/orgs/snft-pro//bridge" target='_blank'><FaGithub /></Link></li>
          </ul>
          
        </div>
        {/* </Container> */}
      </footer>
    </>
  )
}

export default Footer