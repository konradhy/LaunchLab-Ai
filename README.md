# LaunchLab Template

Launch LabAI is an easy-to-use platform that connects to OpenAI's NLM API. This project includes features such as full tracking, authentication, session management, token tracking, and Stripe billing. With a wide variety of AI-powered chatbots to choose from, you can find the perfect solution for your needs.

## Demos: launchlab-m94e.onrender.com/

Please allow demo server up to one minute to reboot after visiting the link. 


## Roadmap:

Social Logins 

Zapier integrations 

Integration with Whisper, Dall-E 2 and codex


## Prerequisites
It is important to use the following configurations for installation and dependencies:

Node version 14.17.6

NPM version 6.14.15

Python version 2.7

Before you begin, make sure you have the following items prepared:

OpenAI account and API key

MongoDB Cloud instance database (free tier) and Cluster/Login

NodeJS

StripeJS (optional, if implementing billing)



## Installation
Run npm install or yarn in the root directory to install modules

Update the ENV keys (or ENV.DEV) for your environment (for OpenAI, Mongo, etc.)

MongoDB requires Cluster, Database, Username, and Password

On a PC, run npm run api to start the project

On a Mac, run npm run apimac to start the project

Start the Create React App using npm start

On the first run, the database will initialize with an admin user at /routes/middleware/mongo.js which can be updated

Once you have completed these steps, you will be able to log in with the following details:

Username: admin@domain.com

Password: KeepingHumanSafe101

## Contributing
If you are interested in contributing to this project, please reach out to the maintainers.

## Acknowledgments
OpenAI for providing the  API

MongoDB for providing the cloud database

Stripe for providing the billing solution

Konrad Hylton for creating the project.
