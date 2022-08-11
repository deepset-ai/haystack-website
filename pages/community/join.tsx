import React, { useState } from 'react';
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function Index() {

    type Serverity = "error" | "success" | "info" | "warning" | undefined;

const [email, setEmail] = useState('');
const [fname, setFName] = useState('');
const [lname, setLName] = useState('');
const [consentToProcess, setConsentToProcess] = useState(false);
const [communications, setCommunications] = useState(true);
const [success, setSuccess] = useState(false);
const [message, setMessage] = useState("Thank you for joining our community!");
const [severity, setSeverity] = useState<Serverity>("success");
const vertical='top'; 
const horizontal='center';

const handleSubmit = (event: any) =>  {
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
        "pageName": "Discord Signup Page"
      },
      "legalConsentOptions":{ // Include this object when GDPR options are enabled
        "consent":{
          "consentToProcess":consentToProcess,
          "text":"I agree to allow deepset GmbH to store and process my personal data.",
          "communications":[
            {
              "value":communications,
              "subscriptionTypeId":44544699,
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
      var form = document.getElementById("signup-form");
      if(form != null){
        form.innerHTML = "Thank you for signing up ❤️";
      }
  };

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
   
  const handleChangeFName = (event: any) => {
    setFName(event.target.value);
  };

  const handleChangeLName = (event: any) => {
    setLName(event.target.value);
  };

  const handleChangeConsentToProcess = (event: any) => {
    setConsentToProcess(event.target.checked);
  };

  const handleCommunication = (event: any) => {
    setCommunications(event.target.checked);
  };

  const handleClose = (reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };
    

    return <div>
    <Head>
        <title>Haystack Community</title>
        <meta name="description" content="Haystack Discord" />
        <link rel="icon" href="/img/HaystackIcon.png" />
    </Head>
    <Header docsType={"haystack"}/>
    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}} >
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>

    <div className="justify-center relative w-full p-8 dark:bg-gray-800 dark:text-white">
        <div className="flex justify-center mb-10">
            <h1 className="text-5xl font-semibold max-w-4xl">Join the Haystack Community on Discord</h1>
        </div>
        <div className="flex justify-center mb-10">
            <h2 className="text-3xl font-semibold max-w-4xl text-center">Learn more about what people are building with Haystack, ask questions, share knowledge, track events, meet collaborators.</h2>
        </div>
        <div className="flex justify-center mb-10">
                <iframe src="https://discord.com/widget?id=993534733298450452&theme=dark" 
                        width="350" height="350" 
                        frameBorder="0" 
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                </iframe>

                  {/* <button
                      type="submit"
                      className="bottom-2 right-2 bg-dark-blue rounded-lg p-4 z-10 shadow border border-off-white text-white font-bold text-2xl"
                  >
                      Join the Haystack Community on Discord
                  </button> */}
        </div>
        <div className="flex justify-center mb-10">
            <h2 className="text-3xl font-semibold max-w-4xl text-center">(Optional) Subscribe to our updates and future newsletters 👇</h2>
        </div>
        <div className="flex justify-center" id="signup-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2">
                        <FormControl className="form-control max-w-4xl w-full" variant="filled">
                            <InputLabel required htmlFor="fname">First Name</InputLabel>
                            <Input id="fname" value={fname} onChange={handleChangeFName} />
                        </FormControl>
                    </div>
                    <div className="mb-2">
                        <FormControl className="form-control max-w-4xl w-full" variant="filled">
                            <InputLabel required htmlFor="lname">Last Name</InputLabel>
                            <Input id="lname" value={lname} onChange={handleChangeLName} />
                        </FormControl>
                    </div>
                    <div className="mb-2">
                        <FormControl className="form-control max-w-4xl w-full" variant="filled">
                            <InputLabel required htmlFor="email">Email address</InputLabel>
                            <Input id="email" value={email} onChange={handleChangeEmail} />
                        </FormControl>
                    </div>
                    <div className="mb-2">
                        <FormControlLabel className="form-checkbox max-w-4xl w-full"
                            control={<Checkbox required checked={consentToProcess} onChange={handleChangeConsentToProcess} name="consentToProcess" />}
                            label="I agree to allow deepset GmbH to store and process my personal data.*"
                            />
                    </div>
                    <div className="mb-2">
                        <FormControlLabel className="form-checkbox max-w-4xl w-full"
                            control={<Checkbox checked={communications} onChange={handleCommunication} name="communications" />}
                            label="I agree to receive information, product updates and commercial offers from deepset GmbH."
                            />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bottom-2 right-2 bg-dark-blue rounded-lg p-4 z-10 shadow border border-off-white text-white font-bold text-2xl"
                        >
                            Sign up for Emails and Newsletters
                        </button>
                    </div>
                </div>                       
            </form>
        </div>
    </div>
    <Footer />
    </div>
}