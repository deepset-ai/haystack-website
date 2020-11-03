import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import './beta.scss';
import SEO from "../../components/seo";
//import IconJPG from "../../images/HaystackIcon.jpg"
import Logo from "../../images/haystack_logo_blue_banner_social.png"


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Button from "../../components/landing-page/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import HaystackHub from "../../images/im-card-2@3x.png"

const BetaPage = () => {

  const [email, setEmail] = useState('');
  const [usecase, setUsecase] = useState('');
  const [consentToProcess, setConsentToProcess] = useState(false);
  const [communications, setCommunications] = useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (event) =>  {
    event.preventDefault();
    // Create the new request 
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/4561480/4bc48899-da35-491b-b881-ba73c0f40373';
    
    // Example request JSON:
    var data = {
      "submittedAt": new Date().getTime(),
      "fields": [
        {
          "name": "email",
          "value": email
        },
        {
          "name": "use_case",
          "value": usecase
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

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
   
  const handleChangeUsecase = (event) => {
    setUsecase(event.target.value);
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
        <SEO title="Haystack Hub (Beta)" pathname="/signup/beta" image={Logo} />
        <section className="contact">
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            Thank you for joining the waiting list!
            </Alert>
            </Snackbar>

            <div className="beta-signup">
            <img className="product-img haystackhub-img" src={HaystackHub} alt="Haystack Hub"></img>
            <h2>Haystack Hub (Beta)</h2>
            <p>Join the waiting list for our enterprise-ready SaaS platform for QA</p>
            <div className="description-features">
            <div className="product-description">Everything in Open Source plus:</div>
            <div className="products-features">
            <div class="row">
            <div class="column-left">
                <ul>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                </ul>
                </div>
                <div class="column">
                <ul>
                    <li>
                        Web interface for configuring and operating your QA system
                    </li>
                    <li>
                        Search UI for end users
                    </li>
                </ul>
                </div>
                <div class="column-left">
                <ul>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                </ul>
                </div>
                <div class="column">
                <ul>
                    <li>
                        API access
                    </li>
                    <li>
                        Support
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </div>
            <div className="beta-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel required htmlFor="email">Email address</InputLabel>
                        <Input required id="email" value={email} onChange={handleChange} />
                        </FormControl>
                        </div>
                        <div>
                        <FormControl className="form-control" variant="filled">
                        <InputLabel htmlFor="usecase">Use case</InputLabel>
                        <Input id="usecase" value={usecase} onChange={handleChangeUsecase} />
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
                            label="Join the Waiting List"
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