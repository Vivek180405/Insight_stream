import React, { useState } from 'react'
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [showA, setShowA] = useState(false);

  const [email, setEmail] = useState('');

  const hangleSubmit = (e) =>{
    e.preventDefault()
    setEmail('')
    setShowA(true)
    setTimeout(() => {
      setShowA(false)
    }, 3000);
  }



  return (
    <div className='newsletter-container'>
      <h2>Subscribe to the newsletter</h2>
      <h4>Get a weekly digest of our most important stories direct to your inbox.</h4>
      
      <form className='newsletter-form'>
        <input type='text' placeholder='Enter Your Email' onChange={(e)=> setEmail(e.target.value)} value={email} />
        <button onClick={hangleSubmit} >Subscribe</button>
      </form>
      {showA ?
        <div className='newsletter-success'>
          <p>Thank you for subscribing!</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      :""}
      <p>By subscribing to the VK News newsletter, you agree to receive weekly updates and promotional content from VK News. Your email address will be securely stored and used solely for the purpose of delivering news updates and related communications. We respect your privacy and are committed to protecting your personal information in accordance with our Privacy Policy. We will not share, sell, or disclose your email address to third parties without your explicit consent, except as required by law. You may unsubscribe at any time by clicking the 'Unsubscribe' link in any of our emails. For more details on how we handle your data, please review our full Privacy Policy and Terms of Service available on our website.</p>
    </div>
  )
}

export default NewsLetter