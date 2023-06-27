//import emailConfig from '../../../email.config';

const apiKey = "8a8503a08ee7496688f150bf5b42b433";
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey


export function sendEmailValidationRequest(email) {
    console.log("sendEmailValidationRequest");
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiURL + '&email=' + email, false); // Configurando o terceiro parâmetro para false torna a requisição síncrona
    xhr.send();
  
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const isValidSMTP = data.is_smtp_valid.value;
      console.log("sendEmailValidationRequest - result " + isValidSMTP);
      return isValidSMTP;
    } else {
      console.error("Error sending email validation request:", xhr.statusText);
      return false;
    }
  }
