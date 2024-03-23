import emailjs from '@emailjs/browser';

const KEY ='Rt_a3nTrCgLGw0F9l'

export const sendEmail = (event) => {
  return emailjs.sendForm('service_z0o4lac', 'template_ewu1rmj', event.target, {
    publicKey: KEY
  })
  .then((result) => {
      return result
  }, (error) => {
      return error
  });
}