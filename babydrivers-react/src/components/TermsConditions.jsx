import React from 'react'

var today = new Date()

const TermsConditions = () => {
    const currentDate = () => {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric' 
        };
        return new Date().toLocaleDateString('en-US', options);
    };
    
    return (
        <div className='terms_conditions_class'>
            <h2>Hotel California Terms and Conditions</h2>
            <p>Last Updated on: {currentDate()}</p>

            <section>
                <h3>Reservation and Check In Info</h3>
                <ul>
                    <li>Reser
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default TermsConditions