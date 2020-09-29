import React from 'react';
import Layout from '../../components/layout/layout';
import './contact.scss';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Button from "../../components/landing-page/button";

const ContactPage = () => {

  return (
      <Layout>
        <section className="contact">
            <div className="contact-form">
                <form method="post" action="#" className="inner-form">
                    <h2>Want to learn more?</h2>
                    <h3>Get details. Request a quote. Explore your options.<br/>Feel free to leave a message.</h3>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel required htmlFor="firstname">First name</InputLabel>
                    <Input required id="firstname" />
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel required htmlFor="lastname">Last name</InputLabel>
                    <Input required id="lastname"/>
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel required htmlFor="email">Email address</InputLabel>
                    <Input required id="email"/>
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel htmlFor="company">Company name</InputLabel>
                    <Input id="company"/>
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel htmlFor="phone">Phone number</InputLabel>
                    <Input id="phone"/>
                    </FormControl>
                    </div>
                    <div>
                        <InputLabel required htmlFor="textarea" className="label-textarea">Your message</InputLabel>
                        <FormControl className="form-control">
                        <TextareaAutosize required rows="10" id="textarea"/>
                        </FormControl>
                    </div>
                    
                <div>
                <Button className="item-button" label="Send" />
                </div>
                </form>
            </div>
        </section>
      </Layout>
  );

};
  

export default ContactPage