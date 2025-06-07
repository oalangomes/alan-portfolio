//import emailConfig from '../../../email.config';

const apiKey = process.env.REACT_APP_ABSTRACTAPI_KEY;
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=';

export async function sendEmailValidationRequest(email) {
    try {
        const response = await fetch(`${apiURL}${apiKey}&email=${email}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        const isValidSMTP = data.is_smtp_valid.value;
        return isValidSMTP;
    } catch (error) {
        console.error('Error sending email validation request:', error);
        return false;
    }
}
