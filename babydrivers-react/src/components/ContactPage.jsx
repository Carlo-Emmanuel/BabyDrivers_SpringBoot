import React from 'react'
import ImageCarousel from "./ImageCarousel";
import { contacts_slides } from "./contactsCarousel.json";

const ContactPage = () => {
  return (

    <div className='contact_content'>ContactPage
        <h2>
            Contact Us
        </h2>
        <ImageCarousel data={contacts_slides}></ImageCarousel>
    </div>

  )
}

        // <h4>
        //     <ol>
        //         <li>
                    
        //         </li>
        //     </ol>
        // </h4>

export default ContactPage