import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='mt-5 w-100 bg-info'>
      <div className='footer-content d-flex justify-content-evenly'>
        <div style={{width:'400px'}} className="media ms-2">
          <h5 className='d-flex text-light'><i style={{height:'25px'}} className='fa-solid fa-truck-fast m-1'></i>E-Cart</h5>
          <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors</p>
          <span>Code licensed MIT,docs CC BY 3.0</span>
          <br />
          <span>Currently v5.3.2</span>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5>Guides</h5>
         <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
         <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
        </div>
        <div className="contact">
          <h5>Contact Us</h5>
          <div className='d-flex'>
              <input type="text" className='form-control me-1' placeholder='Email Id please' />
              <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
          <a href="https://twitter.com/i/flow/login" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-1.5x"></i></a>
          <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127631%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9040212%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiApaarBhB7EiwAYiMwqiGMb51iOfGF6N5NkWk0hWNHvfeh_-TfLDVoFyFVU9iq0B_6mlo-zBoC0zgQAvD_BwE" target='_blank' style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-1.5x"></i> </a>
          <a href="https://www.linkedin.com/posts/akshay-suresh-468b872a7_html-css-bootstarp-activity-7149061853640355840-Q2qe/?utm_source=share&utm_medium=member_ios" target='_blank' style={{textDecoration:'none',color:'white'}}> <i class="fa-brands fa-linkedin fa-1.5x"></i></a>
          <a href="https://github.com/" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github fa-1.5x"></i></a>
          <a href="https://countrycode.org/how-to-call" target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone fa-1.5x"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Built with React</p>
    </div> 
  )
}

export default Footer