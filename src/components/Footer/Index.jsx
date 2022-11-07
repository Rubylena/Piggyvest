import React from 'react'
import logo from '../../assets/img/logo.svg'
import compliant from '../../assets/img/compliant.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import './footer.scss'

const Index = () => {
  return (
    <footer className='footer'>
        <div className='footer_top'>
            <div className='footer_top_left'>
                <a href='/index.html'><img src={logo} alt='logo' ></img></a>
                <img src={compliant} alt='NDPR Audit' ></img>
            </div>
            <div className='footer_top_right'>
                <div className='footer_top_right_first'>
                    <ul>Products
                        <li><a href='https://www.piggyvest.com/piggybank'>Piggybank</a></li>
                        <li><a href='https://www.piggyvest.com/invest'>Invest</a></li>
                        <li><a href='https://www.piggyvest.com/safelock'>Safelock</a></li>
                        <li><a href='https://www.piggyvest.com/targets'>Target Savings</a></li>
                        <li><a href='https://www.piggyvest.com/flex-naira'>Flex Naira</a></li>
                    </ul>

                    <ul>Company
                        <li><a href='https://www.piggyvest.com/about'>About</a></li>
                        <li><a href='https://www.piggyvest.com/faq'>FAQs</a></li>
                        <li><a href='https://blog.piggyvest.com/'>Blog</a></li>
                    </ul>
                </div>
                <div>
                    <ul>Legal
                        <li><a href='https://www.piggyvest.com/terms'>Terms</a></li>
                        <li><a href='https://www.piggyvest.com/privacy'>Privacy</a></li>
                        <li><a href='https://www.piggyvest.com/security'>Security</a></li>
                    </ul>
                </div>
                <div className='footer_top_right_last'>
                    <div className='footer_top_right_last_socials'>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faTwitterSquare} />
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                    <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
                    <p>contact@piggyvest.com</p>
                    <a href='tel:+234 700 933 933 933'>+234 700 933 933 933</a>
                </div>
            </div>
        </div>
        <div className='footer_bottom'>
            <p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
            <p>Cloned by Grace Effiong</p>
        </div>
    </footer>
  )
}

export default Index
