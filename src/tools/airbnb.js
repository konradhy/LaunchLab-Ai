import { ClipboardListIcon } from "@heroicons/react/solid";

const obj = {
  title: "AirBnb Ad",
  desc: "Quickly create an airbnb add based on the Airbnb's location",
  category: "Business",
  Icon: ClipboardListIcon,
  // tags: [],
  permissions: ["user"],

  to: "/ai/business/airbnb",
  api: "/ai/business/airbnb",

  fromColor: "blue-600",
  toColor: "yellow-500",

  output: {
    title: "AirBnb Ad Preview",
    desc: "Example of a possible AirBnb Ad",
    // Icon: RefreshIcon,
    // color: "",
  },

  prompts: [
    {
      title: "Detailed Ad",
      desc: "Write a short few words about the ad",
      // n: 1,
      prompts: [
        {
          title: "Address",
          attr: "title",
          value: "",
          placeholder: "31 SW 22ND LN Atlanta 33126-4735 USA ",
          label: "What's your airbnb's address?",
          // type: "textarea",
          maxLength: 40,
          // max: 100,
          min: 10,
          required: true,
          error: "",
          example: "101 NW 58TH CT MIAMI FL 33126-4735 USA",
        },
        {
          title: "Location",
          attr: "salary",
          value: "",
          placeholder: "Georgia Lake",
          label: "Examples: Miami Beach, London, Grand Canyon",
          // type: "textarea",
          maxLength: 20,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Miami",
        },
        {
          title: "Attributes",
          attr: "skills",
          value: "",
          placeholder: "Pool, three bedrooms, no parties aloud",
          label: "Examples: scenic view, air condition",
          // type: "textarea",
          // maxLength: 600,
          // max: 100,
          // min: 1,
          // required: true,
          error: "",
          example: "Air condition, five bedrooms, no smoking",
        },
        {
          title: "Size",
          attr: "company",
          value: "",
          placeholder: "5 people",
          label: "Examples: 3persons, two adults + one child",
          // type: "textarea",
          maxLength: 40,
          // max: 100,
          // min: 1,
          // required: true,
          error: "",
          example: "9+ people",
        },
        {
          title: "Contact Information",
          attr: "contact",
          value: "",
          placeholder: "Adrian Smith adrian@smith.com",
          label:
            "Examples: Adrian, adrian@example.com, Call Adrian on 041021031",
          // type: "textarea",
          // maxLength: 600,
          // max: 100,
          // min: 1,
          // required: true,
          error: "",
          example: "Adrian Smith adrian@smith.com",
        },
      ],
      example: {
        output: `Title: "Luxurious Beachfront Villa in Miami"

Top 5 Local Attractions:

South Beach
Lincoln Road Mall
The Miami Beach Boardwalk
The Perez Art Museum Miami
Little Havana
Description:
Welcome to our luxurious beachfront villa located in the heart of Miami Beach, where you'll be just steps away from the beautiful sandy beaches and some of the top local attractions. This spacious villa is perfect for large groups of up to 9 persons, and features 5 bedrooms and 4 bathrooms. The air conditioning throughout the villa will keep you cool and comfortable, making it the ideal place for a summer getaway.

Inside the villa, you'll find a fully equipped kitchen, a living room with a TV and a fireplace, and dining area. The bedrooms are spacious and comfortable, each with a private bathroom. The villa is a no smoking zone, so guests can enjoy a fresh and clean atmosphere.

Step outside and you'll be just minutes from South Beach, Lincoln Road Mall, and the Miami Beach Boardwalk, where you can enjoy some of the best shopping, dining and nightlife in the area. The Perez Art Museum Miami is also nearby, and the Little Havana is just a short drive away where you can experience the rich culture and flavor of Miami's famous Little Havana neighborhood.

Please contact Adrian Smith via email at adrian@smith.com for any questions and booking arrangements. Experience Miami like never before in this luxurious beachfront villa!`,
        // outputs: [],
        // Icon: RefreshIcon,
        // color: "",
      },
    },
    {
      title: "Basic Ad",
      desc: "What is the address of the Airbnb?",
      // n: 1,
      prompts: [
        {
          title: "AirBnb Information",
          attr: "content",
          value: "",
          placeholder: "21 Northstar Way, Miami FL 33126-4735 USA",
          label: "",
          type: "textarea",
          maxLength: 400,
          // max: 100,
          // min: 1,
          required: true,
          error: "",
          example: "101 NW 58TH CT MIAMI FL 33126-4735 USA",
        },
      ],
      example: {
        output: ` Title: "Modern Miami Retreat"

Top 5 Local Attractions:

Wynwood Art District
Little Havana
The Phillip and Patricia Frost Museum of Science
Vizcaya Museum and Gardens
Miami Seaquarium
Description:
Welcome to our modern Miami retreat located in the heart of the city at 101 Later 58th CT Miami, FL 33126-4735 USA. This spacious and contemporary home offers a perfect blend of city living and relaxation, making it the ideal place for your next Miami getaway.

The home features 4 bedrooms, 3 bathrooms, and can comfortably accommodate up to 8 guests. The open concept living space is designed for entertainment and comfort with a modern kitchen, cozy dining area and a comfortable living room with a TV. You will also find that the house is equipped with air conditioning and all the modern amenities to make your stay as enjoyable as possible.

The retreat is located in a prime location, where you can easily access some of Miami's top attractions. The Wynwood Art District is just a short drive away, where you can explore the street art and galleries. Little Havana is also nearby, where you can experience the rich culture and flavor of the neighborhood. The Phillip and Patricia Frost Museum of Science, Vizcaya Museum and Gardens, and Miami Seaquarium are also nearby and offer a great opportunity to experience the culture and nature of Miami

Experience Miami like never before and book your stay at our modern Miami retreat today.`,
        // outputs: [],
        // Icon: RefreshIcon,
        // color: "",
      },
    },
  ],
};

export default obj;
