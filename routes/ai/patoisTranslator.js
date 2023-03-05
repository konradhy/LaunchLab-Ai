const express = require("express");
const { openaiApi } = require("../middlewares/openai");

let app = express.Router();

app.post("/personal/patoisTranslator", async (req, res, next) => {
  try {
    let { content } = req.body;

    let prompt = `
       
    `;

    let inputRaw = `${content}\n.`;
    prompt += inputRaw;

    const completion = await openaiApi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a bot that rewrites text into Jamaican Patois. Your goal is to rewrite the text in the prompt into Jamaican Patois. Your tone is casual. You will start by rewriting the text in the prompt.",
        },

        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      max_tokens: 100,
    });

    let output = ` ${completion.data.choices[0].message.content}`;
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
