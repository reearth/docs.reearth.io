---
sidebar_position: 2
---

# How to set up Auth0
------

### 1. Create your Auth0 account
Access https://auth0.com/signup and sign up for Auth0.

### 2. Create your tenant
For the first time sign in, you'll see this screen:

![image_0](./img/Untitled.png)

Follow "Create Tenants" and complete setting up a new tenant.

### 3. Add an application
Jump to the applications page and click "Create Application" button.

![image_1](./img/Untitled1.png)

Re:Earth needs 2 application: one is a Single Page Web Application for the front-end, another is a Machine to Machine Application for the back-end.

First, create a new Single Page Web Application, then reopen this dialog and create a new Machine to Machine Application. Any application name is ok, but for example, "Re:Earth frontend" and "Re:Earth backend" are recommended.

After creating a Machine to Machine Application, you may see this modal:

![image_2](./img/Untitled2.png)

Select "Auth0 Management API" and then select the following permissions: read:users and update:users. And then click "Authorize" to finish the modal.

Note: This is the minimum permissions required at this time. There is no behavioral problem in choosing more permissions than this. From a security point of view, the fewer permissions you allow, the safer the app is.

![image_3](./img/Untitled3.png)

After creation, 2 apps appears:

![image_4](./img/Untitled4.png)

At this point open the Single Page Application settings and change these fields:

Application URIs
Application Login URI: Enter your URI you want to deploy Re:Earth (e.g. https://reearth.your-service.com)
If you want to run Re:Earth locally, you also need to add http://localhost:8080, http://localhost:3000.
Allowed Callback URLs: should be the same as Application Login URI
Allowed Logout URLs: should be the same as Application Login URI
Allowed Origins (CORS): should be the same as Application Login URI
Refresh Token Rotation
Rotation: should be "Enabled"
Note: the Machine to Machine Application doesn't need to any settings modified.

### 4. Add an API
Move to "APIs" and then click the "Create API" button:

![image_5](./img/Untitled5.png)

Name: any name is ok
Identifier: any identifier is ok, but generally it is set to the same string as the Application URI. (e.g. https://reearth.your-service.com)
Signing Algorithm: RS256
Step 5 is only necessary if you will host Re:Earth in a production environment. If you are only setting up Re:Earth locally, skip step 5 and move on to step 6.
### 5. Set up the tenant
Jump to the tenant settings and change these fields:

![image_6](./img/Untitled6.png)

API Authorization Settings
Default Audience: should be the same as the API Identifier
Default Directory: select "Username-Password-Authentication"
### 6. Add a custom action to sign up Re:Earth automatically
Jump to the Flows page and select "Post User Registration":

![image_7](./img/Untitled7.png)

Then click "Create Action" on the right-hand side and create a new action (any name is ok):

![image_8](./img/Untitled8.png)

After that, please copy and paste the following code to the text box:

![image_9](./img/Untitled9.png)

const axios = require("axios");

const url = "https://reearth.yourservice.com";

exports.onExecutePostUserRegistration = async (event) => {
  const res = await axios.post(url + "/api/signup", {
    email: event.user.email,
    sub: event.user.user_id,
    name: event.user.username || event.user.nickname || event.user.email,
  });
  console.log("Re:Earth OK", res);
};
Set the url variable's value in the code to the same as the Application Login URI (without a slash at the end).

Then, add a module: click Modules in the left bar and click "Add Module" button:

![image_10](./img/Untitled10.png)

Type axios in Name and click the "Create" button.

![image_11](./img/Untitled11.png)

Finally, click the "Deploy" button to finish editing the custom action:

![image_12](./img/Untitled12.png)

Lastly, move back to the Post User Registration flow page, and drag-and-drop the custom action on the right sidebar you created between "Start" and "Complete":

![image_13](./img/Untitled13.png)

### 7. Sign up your account
Move to Users and click the "Create User" button to create your user. Any email and password is OK but connection should be Username-Password-Authentication.

![image_14](./img/Untitled14.png)

Then, check your email inbox to verify your email address.

7.5 For local setup only: sign up to Re:Earth
This step is only for a local setup (on localhost) and is only necessary to perform once.

At his point you should have an Auth0 account setup, but that doesn't mean your local machine has a Re:Earth account. Therefore, you need to send an HTTP request to the Re:Earth signup API. Make sure reearth-backend is running on localhost:8080 and then in another terminal type:

curl -H 'Content-Type: application/json' http://localhost:8080/api/signup -d @- << EOF
{
  "sub": "YOUR AUTH0 ACCOUNT ID",
  "email": "YOUR AUTH0 ACCOUNT EMAIL",
  "name": "YOUR AUTH0 ACCOUNT NAME"
}
EOF
You can find your Auth0 account id, email, name and secret from your Auth0 dashboard. From User Management in the left navigation, click on Users. Select the user you want to add and scroll until you see Identity Provider Attributes.

### 8. Gather information
Settings are finished! Gather information that you will need in the next steps:

Audience: the same as the API Identifier (used by REEARTH_AUTH0_AUDIENCE)
Domain: find it on the Applications page (common to all applications) (used by REEARTH_AUTH0_DOMAIN)
Front-end application client ID: find it on the Applications page (used by REEARTH_AUTH0_WEBCLIENTID)
Back-end application client ID: find it on the Applications page (used by REEARTH_AUTH0_CLIENTID)
Back-end application client secret: find it on the Applications page (used by REEARTH_AUTH0_CLIENTSECRET)
Note: In the settings page of an application, you can see Domain, client ID, and Client Secret:

![image_15](./img/Untitled15.png)

Now you're done with Auth0, so to continue setting up Re:Earth go to the next step!

### Q&A
Why is Auth0 required to run Re:Earth?
To shorten the development time of Re:Earth.

Implementing authentication authorization on Re:Earth's own can take time and lead to creating vulnerabilities. Therefore, by adopting Auth0 as the authentication infrastructure, Re:Earth aims to avoid the development of authentication infrastructure, while quickly making the functions safe to use.

However, in the current situation where Auth0 is always needed to run Re:Earth, I have to say that Re:Earth lacks portability as OSS. Fortunately, Auth0 is compliant with standards such as OAuth 2.0 and OpenID Connect, so it won't take that much development time to make it so Re:Earth works with other IDaaS that support them.

Future plans also include Re:Earth itself implementing its own simple authentication infrastructure (with the help of external libraries).