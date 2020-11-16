import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import InputMask from "react-input-mask";
import './style.scss'

const ContactForm = () => {
  const WEBSITE_URL = 'https://qwpwg.wg-al.site/';
  const FORM_ID = '357'; //Form id that provides Contact Form 7

  const [token, setToken] = useState('') // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state

  // this effect function authenticates our subcriber user to get a token
  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: 'fed', // provide a user credential with subscriber role
        password: 'qwert147'
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      setToken(response.data.token)
    }).catch(error => console.error( 'Error', error ))
  }, [])

  // use useFormik hook using object destructuring assignment to extract helpful methods
  const {
    handleChange,
    isSubmitting,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: {        
      fullname: '',
      telphone: '',
      email: '',
    },
    onSubmit: ({        
      fullname,
      telphone,
      email
    }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      // here we created a FormData field for each form field
      const bodyFormData = new FormData();
      bodyFormData.set('fullname', fullname);
      bodyFormData.set('telphone', telphone);
      bodyFormData.set('email', email);  
            
      // here we sent
      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      }).then(response => {
        // actions taken when submission goes OK
        resetForm()
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(true)
      }).catch(error => {
        // actions taken when submission goes wrong
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(false)
      })
    },
  })

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 3000);
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])

  return (
    <form className="form-popapp" onSubmit={handleSubmit}>
      <fieldset>      
        <div>          
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Your name"
            onChange={handleChange}
            value={values.fullname}
            required
          />
        </div>
        { <div>          
          <InputMask
            mask="+4\9(999)999-99-999"
            id="telphone"
            name="telphone"
            type="tel" 
            minlength="18"
            placeholder="Phone namber"           
            onChange={handleChange}
            value={values.telphone}
            required
          />
        </div> }
        <div>          
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={values.email}            
          />
        </div>        
      </fieldset>
      <div>
        <button
          type="submit"
          aria-label="Send Message"
          value={values.Send}
          disabled={isSubmitting}
        >Send Message</button>
      </div>
      {messageSent && isSuccessMessage && (
        <div className="form-message">Message sent successfully!</div>
      )}
      {messageSent && !isSuccessMessage && (
        <div className="form-message">something went wrong please try again.</div>
      )}
    </form>
  )
}

export default ContactForm