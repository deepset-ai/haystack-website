import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import './join.scss';
import SEO from "../../components/seo";
import Logo from "../../images/haystack_logo_blue_banner_social.png"


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Button from "../../components/landing-page/button";

import OpenSource from "../../images/haystack_logo_blue_banner.png"

const BetaPage = () => {

  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [company, setCompany] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [consentToProcess, setConsentToProcess] = useState(false);
  const [communications, setCommunications] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("Thank you for joining our community!");
  const [severity, setSeverity] = React.useState("success");
  const vertical='top'; 
  const horizontal='center';

  const handleSubmit = (event) =>  {
    event.preventDefault();

    // Hubspot integration
    // Create the new request 
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/4561480/28f3118d-1c2b-4a93-9c8f-f11e4454f1ac';
    
    // JSON:
    var data = {
      "submittedAt": new Date().getTime(),
      "fields": [
        {
          "name": "email",
          "value": email
        },
        {
          "name": "github",
          "value": github
        },
        {
          "name": "company",
          "value": company
        },
        {
          "name": "firstname",
          "value": fname
        },
        {
          "name": "lastname",
          "value": lname
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
          setMessage("Thank you for joining our community!");
          setSeverity("success");
          setSuccess(true);// Returns a 200 response if the submission is successful.

          // Send invite
          // Create the new request 
          var xhrInvite = new XMLHttpRequest();
          var urlInvite = 'https://p3e3737mri.execute-api.eu-central-1.amazonaws.com/default/haystack-slack-invite';
          var dataInvite = {email: email};
          var final_dataInvite = JSON.stringify(dataInvite);

          xhrInvite.open('POST', urlInvite);

          xhrInvite.onreadystatechange = function() {
            //console.log(xhrInvite);
          }

          // Sends the request 
          xhrInvite.send(final_dataInvite);
        } else if (xhr.readyState === 4 && xhr.status === 400){ 
          setMessage("An error occurred. Please check your details.");
          setSeverity("error");
          setSuccess(true);// Returns Error         
        } else if (xhr.readyState === 4 && xhr.status === 403){ 
          setMessage("An error occurred. Please check your details.");
          setSeverity("error");
          setSuccess(true);// Returns Error                   
        } else if (xhr.readyState === 4 && xhr.status === 404){ 
          setMessage("An error occurred. Please check your details.");
          setSeverity("error");
          setSuccess(true);// Returns Error             
        } else {
          setMessage("An error occurred. Please check your details.");
          setSeverity("error");
          setSuccess(true);// Returns Error  
        }
      }

      // Sends the request 
      xhr.send(final_data);

  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
   
  const handleChangeGithub = (event) => {
    setGithub(event.target.value);
  };

  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleChangeFName = (event) => {
    setFName(event.target.value);
  };

  const handleChangeLName = (event) => {
    setLName(event.target.value);
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
        <SEO title="Haystack Community" pathname="/community/join" image={Logo} />
        <section className="contact">
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}} >
            <Alert onClose={handleClose} severity={severity}>
            {message}
            </Alert>
            </Snackbar>

            <div className="community-signup">
            <img className="product-img haystackos-img" src={OpenSource} alt="Haystack Open Source"></img>
            <h2>Join the Haystack Community on Slack</h2>
            <p>Learn more about what people are building with Haystack, ask questions, share knowledge, track events, meet collaborators.</p>
            <div className="beta-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel required htmlFor="fname">First Name</InputLabel>
                        <Input required id="fname" value={fname} onChange={handleChangeFName} />
                        </FormControl>
                        </div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel required htmlFor="lname">Last Name</InputLabel>
                        <Input required id="lname" value={lname} onChange={handleChangeLName} />
                        </FormControl>
                        </div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel required htmlFor="email">Email address</InputLabel>
                        <Input required id="email" value={email} onChange={handleChangeEmail} />
                        </FormControl>
                        </div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel htmlFor="company">Company/ Organization</InputLabel>
                        <Input id="company" value={company} onChange={handleChangeCompany} />
                        </FormControl>
                        </div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel htmlFor="github">Github handle</InputLabel>
                        <Input id="github" value={github} onChange={handleChangeGithub} />
                        </FormControl>
                        </div>
                        <div>
                        <FormControlLabel className="form-checkbox"
                        control={<Checkbox required checked={consentToProcess} onChange={handleChangeConsentToProcess} name="consentToProcess" />}
                        label="I agree to allow deepset GmbH to store and process my personal data.*"
                        />
                        </div>
                        <div>
                        <FormControlLabel className="form-checkbox"
                        control={<Checkbox checked={communications} onChange={handleCommunication} name="communications" />}
                        label="I agree to receive marketing communications from deepset GmbH."
                        />
                        </div>
                        </div>                    
                    <div>
                    <Button
                            type="submit"
                            className="signup-beta"
                            label="Join the Haystack Community on Slack"
                        >
                    </Button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
      </Layout>
  );

};
  

export default BetaPage