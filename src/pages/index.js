import React, { useState } from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import GithubLogo from "../images/icon/GitHub-Mark-32px.png"; 
import Banner from "../images/haystack_logo_blue_banner.png";
import Icon from "../images/HaystackIcon.png"
import IconJPG from "../images/HaystackIcon.jpg"

import LocalizedLink from "../components/localizedLink/localizedLink";  

import GithubButton from "react-github-button";
import "react-github-button/assets/style.css";
import { useMobileScreen } from "../hooks";
import "../scss/index.scss";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const IndexPage = () => {

  const [email, setEmail] = useState('');
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

  const handleChangeConsentToProcess = (event) => {
    setConsentToProcess(event.target.checked);
  };

  const handleCommunication = (event) => {
    setCommunications(event.target.checked);
  };

  const screenWidth = useMobileScreen();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };

  return (
    <Layout>
      <SEO title="Haystack" image={IconJPG}  />
      <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you for joining the waiting list!
        </Alert>
      </Snackbar>
      <main className="home-wrapper">
        <section className="section1">
          <div className="githubicon">
            <GithubButton
              type="stargazers"
              size="large"
              namespace="deepset-ai"
              repo="haystack"
            />
          </div>
          <div className="deepset-banner">
          {screenWidth > 1000 ? (
            <img  claccName="img-deepset-banner" src={Banner} alt="Deepset Banner"></img>
          ) : (
            <img  claccName="img-deepset-banner" src={Icon} alt="Deepset Banner"></img>
          )}
          </div>
          <div className="btn-wrapper">
            <LocalizedLink
              className="primary white-color"
              to="/en/docs/get_startedmd"
              locale="en"
            >
              Get started
            </LocalizedLink>
            <LocalizedLink
              className="primary white-color"
              to="/en/docs/intromd"
              locale="en"
            >
              Learn more
            </LocalizedLink>
          </div>
        </section>
        <section className="section4">
          <h2>Open Source</h2>
          <p>Haystack is open-sourced on GitHub</p>
          <p>Contribution and Feedback are welcome!</p>
          <div className="btn-wrapper">
            <a
              className="primary primary-color with-icon"
              href="https://github.com/deepset-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="github"></img>
              <span>Contribute on Github</span>
            </a>
          </div>
        </section>
        <section className="section5">
          <h2>Haystack Hub (Beta)</h2>
          <p>Join the waiting list for our enterprise-ready SaaS platform for QA</p>
          <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div>
                    <div>
                    <FormControl className="form-control" variant="filled">
                    <InputLabel required htmlFor="email">Email address</InputLabel>
                    <Input required id="email" value={email} onChange={handleChange} />
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
                        className="form-button"
                    >
                        Join the waiting list
                  </Button>
                </div>
                </form>
            </div>
        </section>
      </main>
    </Layout>
  );

};
  

export default IndexPage
