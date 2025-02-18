function formSubmission(message,cbfun)
{
    if(cbfun())
    {
        console.log(message);
    }
    else
    {
        console.log("Form submission failed");
    }
}

function formValidation()
{
    console.log("Form validation is in progress");
    return true;
}

formSubmission("Form submitted successfully",formValidation); // Form submitted successfully