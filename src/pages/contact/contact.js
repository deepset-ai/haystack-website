import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import './contact.scss';
import thumbnail from "../../images/haystack_logo_blue_banner_social.png"; 
import SEO from "../../components/seo"

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from "../../components/landing-page/button";

const ContactPage = () => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [consentToProcess, setConsentToProcess] = useState(false);
    const [communications, setCommunications] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) =>  {
        event.preventDefault();
        // Create the new request 
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/4561480/944a26ce-ea3d-4a57-ba9b-c12c0b9198ce';
        
        // Example request JSON:
        var data = {
        "submittedAt": new Date().getTime(),
        "fields": [
            {
                "name": "email",
                "value": email
            },
            {
                "name": "firstname",
                "value": firstName
            },
            {
                "name": "lastname",
                "value": lastName
            },
            {
                "name": "company",
                "value": company
            },
            {
                "name": "message",
                "value": message
            }
        ],
        "context": {
            "pageUri": "haystack.deepset.ai",
            "pageName": "Haystack Hub"
        },
        "legalConsentOptions":{ // Include this object when GDPR options are enabled
            "consent":{
            "consentToProcess":consentToProcess,
            "text":"I agree to allow deepset GmbH to store and process my personal data.",
            "communications":[
                {
                "value":communications,
                "subscriptionTypeId":999,
                "text":"I agree to receive marketing communications from deepset GmbH."
                }
            ]
            }
        }
        };
        
        var final_data = JSON.stringify(data);
        
        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');
       
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) { 
                setSuccess(true);// Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 400){ 
                alert(xhr.responseText.inlineMessage); // Returns a 400 error the submission is rejected.          
            } else if (xhr.readyState === 4 && xhr.status === 403){ 
                alert(xhr.responseText.inlineMessage); // Returns a 403 error if the portal isn't allowed to post submissions.           
            } else if (xhr.readyState === 4 && xhr.status === 404){ 
                alert(xhr.responseText.inlineMessage); //Returns a 404 error if the formGuid isn't found     
            }
        }


        // Sends the request 
        
        xhr.send(final_data);
    };

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeCompany = (event) => {
        setCompany(event.target.value);
    };

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };

    const handleChangeConsentToProcess = (event) => {
        setConsentToProcess(event.target.checked);
    };
    
    const handleCommunication = (event) => {
        setCommunications(event.target.checked);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setSuccess(false);
    };


  return (
      <Layout>
          <SEO title="Haystack Contact" image={thumbnail} pathname="/contact/contact" />
        <section className="contact">
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                Thank you for your message!
                </Alert>
            </Snackbar>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="inner-form">
                    <h2>Want to learn more?</h2>
                    <h3>Get details. Request a quote. Explore your options.<br/>Feel free to leave a message.</h3>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel required htmlFor="firstname">First name</InputLabel>
                    <Input required id="firstname" value={firstName} onChange={handleChangeFirstName} />
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel required htmlFor="lastname">Last name</InputLabel>
                    <Input required id="lastname" value={lastName} onChange={handleChangeLastName}/>
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel required htmlFor="email" >Email address</InputLabel>
                    <Input required id="email" value={email} onChange={handleChangeEmail}/>
                    </FormControl>
                    </div>
                    <div>
                    <FormControl className="form-control">
                    <InputLabel htmlFor="company" >Company name</InputLabel>
                    <Input id="company" value={company} onChange={handleChangeCompany}/>
                    </FormControl>
                    </div>
                    <div>
                        <InputLabel required htmlFor="textarea" className="label-textarea">Your message</InputLabel>
                        <FormControl className="form-control">
                        <TextareaAutosize required rows="10" id="textarea" value={message} onChange={handleChangeMessage}/>
                        </FormControl>
                    </div>
                    <div className="div-checkbox">
                    <FormControlLabel className="form-checkbox"
                    control={<Checkbox required checked={consentToProcess} onChange={handleChangeConsentToProcess} name="consentToProcess" />}
                    label="I agree to allow deepset GmbH to store and process my personal data.*"
                    />
                    </div>
                    <div className="div-checkbox">
                    <FormControlLabel className="form-checkbox"
                    control={<Checkbox checked={communications} onChange={handleCommunication} name="communications" />}
                    label="I agree to receive marketing communications from deepset GmbH."
                    />
                    </div>
                    
                <div>
                <Button type="submit" label="Submit" />
                </div>
                </form>
            </div>
        </section>
      </Layout>
  );

};
  

export default ContactPage