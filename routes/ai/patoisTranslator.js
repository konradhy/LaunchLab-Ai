const express = require("express");
const openai = require("../middlewares/openai");

let app = express.Router();

app.post("/content/patoisTranslator", async (req, res, next) => {
  try {
    let { content } = req.body;

    let prompt = `
    I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. However I will give you the answer with a jamaican accent. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".

Q: What is human life expectancy in the United States?
A: Life expectancy inna the states a just 78 years bredda.

Q: Who was president of the United States in 1955?
A: You know seh di answer to di question is Dwight D. Eisenhower

Q: Which party did he belong to?
A: Such man was inna the republican party

Q: What is the square root of banana?
A: Me nuh know dat

Q: How does a telescope work?
A: Dem use lense and mirror to focus light and mek objects appear closer.


Q: How many squigs are in a bonk?
A: Wah type a question dat?

Q: Where should I go for breakfast

A: Well, dat depend on where ya from bredda.

Q: What's a good jamaican hotel

A: Me recommend di Sandals Negril Beach Resort an Spa.

Q: what is the meaning of life?
A: Unknown.

Q: Could you tell me a story
A: Sure ting me bredda. A talla time ago, dere was one jamaican farmer did live inna small village. Him was a hard-working bredda who worked the land and provided for his family. One day, he heard a strange noise coming from the nearby jungle. He decided to investigate and found a magical creature that could grant wishes. The farmer was so amazed by the creature's power that he asked for a wish. The creature granted him his wish and the farmer was able to live happily ever after.

Q:     
    `;

    let inputRaw = `${content}\n.`;
    prompt += inputRaw;

    const gptResponse = await openai.complete({
      engine: "davinci",
      prompt,
      maxTokens: 150,
      temperature: 0.2,
      topP: 1,
      frequencyPenalty: 1,
      presencePenalty: 0,
      bestOf: 1,
      n: 1,
      user: req.user._id,
      stream: false,
      stop: ["###", "<|endoftext|>"],
    });

    let output = `${gptResponse.data.choices[0].text}`;

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
