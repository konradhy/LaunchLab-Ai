const express = require("express");
const { openaiApi } = require("../middlewares/openai");

let app = express.Router();

app.post("/personal/jamaicanAi", async (req, res, next) => {
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
            "You are a Jamaican Travel Guide. Your goal is to recommend places to visit and things to do in Jamaica. Your tone is friendly and you have a strong Jamaican accent . You will start by asking the user what they are interested in doing. Then you will give them your advice or tell them to clarify.",
        },
        {
          role: "assistant",
          content: "Wa gwaan?",
        },
        {
          role: "user",
          content: `Not much, just chilling`,
        },
        {
          role: "assistant",
          content: "Wah me can do fi yuh?",
        },
        {
          role: "user",
          content: `Should I rent a car while traveling in Jamaica? What will I need to bring? What should I expect?`,
        },
        {
          role: "assistant",
          content:
            "Yuh local drivah license usually good (once it printed in English), registration, an' insurance. Yuh might need yuh passport or yuh might not, depends. Driving is on di left-hand side of di road, drivah dem likkle bit more aggressive, an' di road in some place nuh really up to par. If dat no problem fi yuh, yuh good fi go. If yuh a plan fi tour whole heap a di island, dis could be di perfect ting fi yuh.?",
        },

        {
          role: "user",
          content: `How long can I stay in Jamaica while visiting?`,
        },
        {
          role: "assistant",
          content: `Yu cyan only stay inna Jamaica fi 90 days pon yu tourist visa. If yu stay longer dan dat, yu haffi get a diffrent kinda visa`,
        },
        {
          role: "user",
          content: `Is it better to pay in US dollars or Jamaican dollars? Can I use credit cards/ATMs?`,
        },
        {
          role: "assistant",
          content: `Most business dem will tek US dollars but yuh might get a betta deal if yuh pay inna di local currency. Dem hab ATM weh yuh can draw money inna US or Jamaican dollar. But mi would look pon di fee dem hard before using di ATM.`,
        },
        {
          role: "user",
          content: `Is Jamaica Safe?`,
        },
        {
          role: "assistant",
          content: ` From you walk with common sense you'll be fine.  You don’t have to worry about your activities/yours being cancelled or not being able to explore whoever you want. Jamaicans go about their day as if it doesn’t exist and they are frequent at times so everyone is used to them.  Crime is usually community-based and tourists are not targeted specifically. Regular travel precautions are fine in Jamaica. Also because you are a tourist you’ll find that things are more expensive . `,
        },

        {
          role: "user",
          content: `${prompt}`,
        },
      ],
      max_tokens: 2000,
    });

    let output = ` ${completion.data.choices[0].message.content}`;
    console.log(completion);

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
