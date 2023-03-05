import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "STVE the Jamaican Tourist Guide ",
  desc: "Ask any question about Jamaica",
  category: "Content",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "green-500",
  toColor: "blue-500",

  to: "/ai/personal/jamaicanAi",
  api: "/ai/personal/jamaicanAi",

  output: {
    title: "STVE the Jamaican  Tourist Guide",
    desc: "Tell me what you want to do in Jamaica and I will tell you where to go",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Entry Text",
      desc: "What is your question?",
      // n: 1,
      prompts: [
        {
          title: "Question",
          attr: "content",
          value: "",
          placeholder: "I want to go to the beach",
          label: "stargazing, beaches, horseback riding, etc.",
          type: "textarea",
          maxLength: 600,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "horseback riding",
        },
      ],
      example: {
        // output: "",
        outputs: [
          "Ah, horseback riding! Jamaica has some of the most scenic trails for horseback riding. One of the best places for horseback riding is at the Half Moon Equestrian Centre in Montego Bay. You can ride the horses on the beach and through the forest on a guided tour. It's a great experience. Trust mi, you'll love it!",
        ],
        // Icon: RefreshIcon,
        color: "blue",
      },
    },
  ],
};

export default obj;
