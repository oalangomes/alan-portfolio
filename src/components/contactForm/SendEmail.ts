import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const sendEmail = (e: { preventDefault: () => void; props: HTMLFormElement; }, form: HTMLFormElement) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
}

export default sendEmail;
