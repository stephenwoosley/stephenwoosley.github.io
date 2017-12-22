import React from 'react';
import 'bulma/css/bulma.css';

const Contact = (props) => {
  return(
    <div>
      <div className="columns">
        <div className="column is-1"></div>
          <div className="column is-8">
           
            <h1 className="title contact-content">
              Feel free to reach out to me on <a href="https://linkedin.com/in/stephenwoosley">LinkedIn</a>, follow me on <a href="https://twitter.com/stephenwoosley">Twitter</a>, or check out my <a href="https://github.com/stephenwoosley">Github page</a>.
            </h1>
            <h1 className="title contact-content" id="contact-2par">
              Or just drop me a line here:
            </h1>
            <form method="POST" action="http://formspree.io/stephenrwoosley@gmail.com">
              <div className="field">
                <div className="control">
                  <input className='input' type="email" name="email" placeholder="Your email address"/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className='textarea' name="message" placeholder="Your message"></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className='button is-link' type="submit" id='submit-form'>Send</button>
                </div>
              </div>
            </form>
          </div>
        <div className="column is-3"></div>
      </div>
    </div>
  );
}

export default Contact;