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
//import axios from 'axios';

const BetaPage = () => {

  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [company, setCompany] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [consentToProcess, setConsentToProcess] = useState(false);
  const [communications, setCommunications] = useState(false);
  const [success, setSuccess] = React.useState(false);
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

    // Send invite
    // Create the new request 
    var xhrInvite = new XMLHttpRequest();
    var urlInvite = 'https://p3e3737mri.execute-api.eu-central-1.amazonaws.com/default/haystack-slack-invite';
    var dataInvite = {
      "email": email
    }
    var final_dataInvite = JSON.stringify(dataInvite);

    xhrInvite.open('POST', urlInvite);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhrInvite.setRequestHeader('Content-Type', 'application/json');

    xhrInvite.onreadystatechange = function() {
     console.log(xhrInvite);
    }

    // Sends the request 
    xhrInvite.send(final_dataInvite);

    //const headers = {
    //  'Content-Type': 'application/json',
    //};
    //const inviteResponse = axios.post('https://p3e3737mri.execute-api.eu-central-1.amazonaws.com/default/haystack-slack-invite', final_dataInvite, { headers });
    //console.log(inviteResponse);
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
            <Alert onClose={handleClose} severity="success">
            Thank you for joining our community!
            </Alert>
            </Snackbar>

            <div className="beta-signup">
            <h2>Haystack Community</h2>
            <p>Join our Haystack Community</p>
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
                            label="Join the Haystack Community"
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