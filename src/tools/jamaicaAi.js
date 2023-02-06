import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "STVE the Jamaican AI ",
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
    title: "STVE the Jamaican AI",
    desc: "Why pree?",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Entry Text",
      desc: "Wah you wah ask?",
      // n: 1,
      prompts: [
        {
          title: "Content",
          attr: "content",
          value: "",
          placeholder: "What is your name...",
          label: "",
          type: "textarea",
          maxLength: 600,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Wah you name?",
        },
      ],
      example: {
        // output: "",
        outputs: [
          "The sun is very old, over 4.5 billion years",
          "At 10,000 degrees, sun is also very hot",
          "Gasses called coronal mass ejections erupt from the sun",
        ],
        // Icon: RefreshIcon,
        color: "blue",
      },
    },
  ],
};

export default obj;
