import React from 'react'

function ContactCard({ headerClass, contactText, contactName, street, city, state, zip, phone, contactEmail }) {
    return (
        <div>
            <h2 className={headerClass}>{contactText}</h2>
            <p className="address">
                <span>{contactName}</span>
                <br />
                <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                </span>
                <br />
                <span><i className="fa fa-mobile"></i> {phone}</span>
                <br />
                <span><i className="fa fa-envelope"></i> {contactEmail}</span>
            </p>
        </div>
    )
}

export default ContactCard
