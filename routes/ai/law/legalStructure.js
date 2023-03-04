const express = require("express");
const { openaiAPI } = require("../../middlewares/openai");

let app = express.Router();

app.post("/law/legalStructure", async (req, res, next) => {
  try {
    let { content, employees, revenue, name, industry, location } = req.body;

    let prompt = `This is a Chatbot that determines what legal structure a business should take:\n`;

    let inputRaw = `${(content, employees, revenue, name, industry, location)}`; // here is where people enter stuff
    prompt += inputRaw;

    const completion = await openaiAPI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a lawyer. Your goal is to ask the user questions about their business's structure, history, revenue and goals to determine what type of legal formation it should have. Your tone is confident. You will start by asking questions about the business.",
        },
        {
          role: "assistant",
          content: "What is the name of the business?",
        },
        {
          role: "user",
          content: `The name of my business is ${name}`,
        },
        {
          role: "assistant",
          content: "How many employees do you have?",
        },
        {
          role: "user",
          content: ` ${employees} `,
        },
        {
          role: "assistant",
          content: "Do you have a physical location?",
        },
        {
          role: "user",
          content: ` ${location} `,
        },

        {
          role: "assistant",
          content: "What industry are you in?",
        },
        {
          role: "user",
          content: ` ${industry} `,
        },
        {
          role: "assistant",
          content: "What is your expected annual revenue?",
        },
        {
          role: "user",
          content: ` ${revenue} `,
        },

        {
          role: "assistant",
          content:
            "Describe your business and tell me any other relevant information. ",
        },
        {
          role: "user",
          content: ` ${content} `,
        },

        {
          role: "assistant",
          content:
            "I have enough information. Say yes if and I will  determine your legal structure and explain it to you.",
        },
        {
          role: "user",
          content: ` Yes`,
        },
      ],
      max_tokens: 2000,
    });

    let output = `${completion.data.choices[0].message.content}`;
    console.log(output);

    // remove the first character from output
    output = output.substring(1, output.length);

    // If the output string ends with one or more hashtags, remove all of them
    if (output.endsWith('"')) {
      output = output.substring(0, output.length - 1);
    }

    // If the output string ends with one or more hashtags, remove all of them
    if (output.endsWith('"')) {
      output = output.substring(0, output.length - 1);
    }

    // remove a single new line at the end of output if there is one
    if (output.endsWith("\n")) {
      output = output.substring(0, output.length - 1);
    }

    req.locals.input = prompt;
    req.locals.inputRaw = inputRaw;
    req.locals.output = output;

    next();
  } catch (err) {
    console.log(err.response);
    console.log(err.data);
    console.log(err.message);
  }
});

module.exports = app;
