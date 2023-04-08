import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <img  className='contact_img'
        src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?b=1&s=170667a&w=0&k=20&c=2sJEN1Hhg6heUi1ZxKs6pJDwcyLYXPc4pUGd3hEjOjE=" alt=""/>
          <div className='contact_container'> 
      <h1 className="h1">Send Message</h1>

        <h2 className="h2_container">Name</h2>
        <input type="text"/>
    
      <h2 className="h2_container">Email</h2>
      <input className="_input" type="text" size={70}/>
     
      <h2 className="h2_container">Type Message</h2>
      <input type="text" />
   <div className="btn_div">
   <button className="btn_right" >
     Submit
      </button>
   </div>
     
      </div>
    </div>
  )
}

export default Contact