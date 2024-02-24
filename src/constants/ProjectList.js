import google from "../assets/projects/google.png";
import crpto from "../assets/projects/crypto.png";
import tubemate from "../assets/projects/tubemate.png";

export const ProjectList = [
  {
    id: 1,
    name: "Search Engine",
    description:
      "Welcome to GClone, where the power of React and the rapid Google API integration come together to offer you an experience reminiscent of the world's most popular search engine. GClone combines the best of React's speed and Google's vast resources, offering a user-friendly search interface. Get instant results across various media types, all powered by Google's APIs. Simplify your search experience with GClone!",
    img: google,
    //max 6 tech stack
    tech: ["React.js", "Tailwind Css", "Google Api"],
    source: "https://github.com/vikashsharmaa25/Google-Lite",
    demo: "https://googleclonelite.netlify.app/",
  },
  {
    id: 2,
    name: "Crypto Tracker",
    description:
      "create a web app for tracking cryptocurrency investments using React with styled-components for styling and Chart.js for chart display. Fetch real-time data from a cryptocurrency API, integrate it into your app, and display it using interactive charts.",
    img: crpto,
    //max 6 tech stack
    tech: ["React.js", "Material ui", "Rapid Api", "Chart.js"],
    source: "https://github.com/vikashsharmaa25/Crypto-Tracker-App",
    demo: "https://cryptotrackerweb.netlify.app/",
  },
  {
    id: 3,
    name: "TubeMate",
    description:
      "Welcome to TubeMate, your gateway to a world of video content and entertainment.Powered by React and the rapid YouTube API integration, TubeMate offers an immersive experience that mirrors the allure of the renowned video-sharing platform.",
    img: tubemate,
    //max 6 tech stack
    tech: ["React.js", "Tailwind CSS", "YouTube api"],
    source: "https://github.com/vikashsharmaa25/TubeMate",
    demo: "https://tubematee.netlify.app/",
  },
  // {
  //   id: 4,
  //   name: "Discord UI",
  //   description:
  //     "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
  //   // img: discord,
  //   //max 6 tech stack
  //   tech: ["React.js", "Tailwind CSS", "Material UI"],
  //   source: "https://github.com/aashish-dhiman/discord-clone",
  //   demo: "https://discord-aashish.vercel.app/",
  // },
  // {
  //   id: 5,
  //   name: "Whisper Wave",
  //   description:
  //     "The Whisper Wave built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
  //   // img: authorisation,
  //   //max 6 tech stack
  //   tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
  //   source: "https://github.com/aashish-dhiman/Authorisation",
  //   demo: null,
  // },
  // {
  //   id: 6,
  //   name: "Keeper - Keep Your Notes",
  //   description:
  //     "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
  //   // img: keeper,
  //   //max 6 tech stack
  //   tech: ["React.js", "Tailwind CSS", "Material UI"],
  //   source: "https://github.com/aashish-dhiman/Keeper-keep-your-notes",
  //   demo: "https://keeper-aashish.netlify.app/",
  // },
];
