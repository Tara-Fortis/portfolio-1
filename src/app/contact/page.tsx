'use client';
import { useState } from "react";
import React from 'react';

export default function Contact() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [confirmation, setConfirmation] = useState<string>('');

    // watch input and update state var as input value changes for each input element
    // name
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    // email
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    // message
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    // show confirmation when button clicked
    const handleSubmit = () => {
        setConfirmation(`Thank you ${name} for your submission. Your message: ${message}`);
    }
    return (
        <main>
                <form action="#" method="post" className="w-full max-w-lg">
                    <legend>
                        <h1>Contact Information</h1>
                    </legend>
                    <fieldset>
                        {/* Name field */}
                        <label htmlFor="name" className="custom-label">
                            Name
                        </label>
                        <input type="text" value={name} onChange={handleNameChange} id="name" className="custom-input" required />

                        {/* Email field */}
                        <label htmlFor="email" className="custom-label">
                            Email
                        </label>
                        <input type="email" value={email} id="email" onChange={handleEmailChange} className="custom-input" />

                        {/* Message field */}
                        <label htmlFor="message" className="custom-label">Message</label>
                        <input type="textarea" value={message} id="message" onChange={handleMessageChange} className="custom-input" required />
                    </fieldset>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                <p>{confirmation}</p>
        </main>
    );
}