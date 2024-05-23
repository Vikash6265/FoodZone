import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <>
      <div className="contact-cart">
         <div className="contact-block">
            <span>
                <ImLocation2 size={35}/>
                <h1>ADDRESS</h1>
                <p>Indore,Madhya Pradesh</p>
                <h6>501, Main Road Indore , 452020</h6>
            </span>

            <span>
                <FaPhoneAlt size={35} />
                <h1>PHONE</h1>
                <p>Indore,Madhya Pradesh</p>
                <h6>+91 2340187253</h6>
            </span>

            <span>
                <CgMail size={45} />
                <h1>EMAIL</h1>
                <p>Request for Proposal</p>
                <h6>Indore@gmail.com</h6>
            </span>

         </div>
      </div>
    </>
  )
}

export default Contact
