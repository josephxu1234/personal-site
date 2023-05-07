import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';

const TEMPLATE_ID = 'template_tf71syh';
const SERVICE_ID = 'service_gy6s8am';
const PUBLIC_KEY = 'a8MJQfm6Mi_vOrAn0';



const ContactForm = () => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// send email via emailjs API
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
			.then((result) => {
				console.log(result.text);
				window.location.reload(false);
			}, (error) => {
				console.log(error.text);
				alert('Submission failed. Please try again.')
			});

		
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="from_name"
						inputType="text"
						inputId="from_name"
						inputName="from_name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="from_email"
						inputType="email"
						inputId="from_email"
						inputName="from_email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
