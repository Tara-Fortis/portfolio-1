'use client';

import { useState } from "react";
import React from 'react';
import { redirect, RedirectType } from 'next/navigation'

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
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //console.log("Thanks for clicking the button");
        setConfirmation(` ${message}`);
    }
    // redirect to bio page
    const bioPage = () => {
        redirect('/bio', RedirectType.replace);
    }
    return (
        <main className="grid-lyt">
            <form action="#" method="post" className=" w-full max-w-lg" onSubmit={handleSubmit}>
                <legend>
                    <h1>Contact Information</h1>
                </legend>
                <fieldset>
                    {/* Name field */}
                    <label htmlFor="name" className="custom-label">Name</label>
                    <input type="text" value={name} onChange={handleNameChange} id="name" className="custom-input" required
                    />

                    {/* Email field */}
                    <label htmlFor="email" className="custom-label">Email</label>
                    <input type="email" value={email} onChange={handleEmailChange} id="email" className="custom-input"
                    />

                    {/* Message field */}
                    <label htmlFor="message" className="custom-label">Message</label>
                    <textarea value={message} onChange={handleMessageChange} id="message" className="custom-input" required
                    ></textarea>
                </fieldset>
                <button type="submit" className="submit">Submit</button>
            </form>
            {/* Show confirmation message if it exists */}
            {confirmation && (
                <>
                    <aside className="confirm">
                        <p className="message">Thank you {name}! Please click confirm to send your message.:<br />{confirmation}</p>
                        <button type="button" onClick={bioPage}>Confirm</button>
                    </aside>
                </>
            )}
        </main>
    );
}
// redirect function found https://nextjs.org/docs/app/api-reference/functions/redirect
// preventDefault function from https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// conditional rendering from https://react.dev/learn/conditional-rendering