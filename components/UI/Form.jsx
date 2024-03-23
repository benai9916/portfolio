import React from "react";
import classes from "../../styles/form.module.css";
import { sendEmail } from "./email";
import { toast } from 'react-toastify';

const Form = () => {
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    let isEmailSent = await sendEmail(event);
    if (isEmailSent.status === 200) {
      toast.success("Thanks for reaching out will get back to you soon.");
    }
  };

  return (
    <form className={`${classes.form}`} onSubmit={handleSubmit}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" name="name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" name="email" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          name="message"
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
