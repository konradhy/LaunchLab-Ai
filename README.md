# LaunchLab Ai

A GPT3 powered platform with several carefully designed Ai chatbots optimized for scenarios that range from tour guides to legal chatbots. Prompts were engineered by leveraging a variety of techniques including Few Shot, Chain-of-Thought, and Self-Ask. Engines and models used include GPT-3 (Curie, Babbage and DaVinci), GPT-3.5, and text-moderation. The project has tracking, authentication, session management, token management, and Stripe billing all wrapped into a sleek interface. Technologies used include: React, Axios, Debounce, Express, Express-rate-limit, JsonWebTokens, MobX, Openai-api, Stripe, Styled-components, Tailwindcss.


## Demos: 
launchlab-m94e.onrender.com/
Please allow demo server up to one minute to reboot after visiting the link. 


## Roadmap:

Improve model usability with prompt engineering
Zapier integrations 
Integration with Whisper, Dall-E 2 and codex




## Installation
Run npm install or yarn in the root directory to install modules

Update the ENV keys (or ENV.DEV) for your environment (for OpenAI, Mongo, etc.)

MongoDB requires Cluster, Database, Username, and Password

On a PC, run npm run api to start the project

On a Mac, run npm run apimac to start the project

Start the Create React App using npm start

On the first run, the database will initialize with an admin user at /routes/middleware/mongo.js which can be updated

Once you have completed these steps, you will be able to log in with the following details:


## Contributing
If you are interested in contributing to this project, please reach out to the maintainers.

## Acknowledgments
OpenAI for providing the  API

MongoDB for providing the cloud database

Stripe for providing the billing solution


