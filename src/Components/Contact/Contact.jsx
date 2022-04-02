import "./contact.css"
import Phone from "../../img/Phone.png"
import Address from "../../img/address.png"
import Email from "../../img/email.png"
import emailjs from 'emailjs-com';
import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_thd98xd', 'template_bn97hfd', formRef.current, '9INu3qu2r3mjFeK7w')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="c1">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact me 
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            7485963214
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            contact@anubhav.in
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Want to get in touch</b> Drop down your quiries here
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Enter Your Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Enter Your Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Enter Your Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows = "5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact