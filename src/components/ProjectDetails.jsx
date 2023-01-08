import aCodeBootstrap from "../assets/aCodeBootstrap.png"
import BinaryBrains from "../assets/BinaryBrains.png"
import BooksToDo from "../assets/BooksToDo.png"
import CryptoExchangeApp from "../assets/CryptoExchangeApp.png"
import DigitalClock from "../assets/DigitalClock.png"
import ExpenseTracker from "../assets/ExpenseTracker.png"
import FoodRecipe from "../assets/FoodRecipe.png"
import Karobar from "../assets/Karobar.png"
import MemoryGame from "../assets/MemoryGame.png"
import Metube from "../assets/Metube.png"
import MicrosoftClone from "../assets/MicrosoftClone.png"
import MovieReview from "../assets/MovieReview.png"
import MusicPlayer from "../assets/MusicPlayer.png"
import NameIt from "../assets/NameIt.png"
import OlaClone from "../assets/OlaClone.png"
import PersonalPortfolio from "../assets/PersonalPortfolio.png"
import PocketMart from "../assets/PocketMart.png"
import PortfolioOld from "../assets/PortfolioOld.png"
import ProfileCard from "../assets/ProfileCard.png"
import RapidoClone from "../assets/RapidoClone.png"
import TechGuy from "../assets/TechGuy.png"
import TeslaClone from "../assets/TeslaClone.png"
import TextUtils from "../assets/TextUtils.png"
import TicTacToe from "../assets/TicTacToe.png"
import TravelArc from "../assets/TravelArc.png"
import UserInterface from "../assets/UserInterface.png"
import VibeTypeApp from "../assets/VibeTypeApp.png"
import WeatherApp from "../assets/WeatherApp.png"
import WordCounter from "../assets/WordCounter.png"

const projectDetails = [
    {
        name: "Crypto Exchange",
        text: "A crypto exchange app made using ReactJs and ChakraUI(React component Library) ,  It fetches data from a live API ",
        tags: ["ReactJs", "ChakraUI" , "API"],
        imgsrc: CryptoExchangeApp,
        link: "https://crypto-exchange-react-app.vercel.app/",
    },
    {
        name: "MeTube",
        text: "A Video playing App, I made this to improve my ReactJs , and also learn more about Its component library ChakraUI",
        tags: ["ReactJs", "ChakraUI"],
        imgsrc: Metube,
        link: "https://me-tube-react-chakra-ui.vercel.app/",
    },
    {
        name: "TechGuy",
        text: "A normal Responsive homepage made using ReactJs, I made this to learn SCSS and improve my React.",
        tags: ["SCSS", "ReactJs"],
        imgsrc: TechGuy,
        link: "https://responsive-react-homepage.vercel.app/",
    },
    // {
    //     name: "Expense Tracker",
    //     text: "An app you can use to Track your expenses, it is made using React and styled using CSS, I plan to complete this project once I learn Backend Development",
    //     tags: ["React", "CSS"],
    //     imgsrc: ExpenseTracker,
    //     link: "https://expense-tracker-react-eight.vercel.app/",
    // },
    {
        name: "Hackaton Project",
        text: "I made the complete design of this project and also created the backend of Signup page using Firebase.",
        tags: ["HTML", "CSS" , "JavaScript" , "Firebase" , "Hackaton"],
        imgsrc: UserInterface,
        link: "https://user-interface-beta.vercel.app/",
    },
    {
        name: "TravelArc",
        text: "Website of an imaginary Travel Agency named TravelArc ,It is made using ReactJs and styled using Vanilla CSS",
        tags: ["ReactJs", "CSS"],
        imgsrc:TravelArc,
        link: "https://travel-arc.vercel.app/",
    },
    // {
    //     name: "TicTacToe",
    //     text: "A basic TicTacToe Game made using HTML CSS and JavaScript , Intention behind making this was to practice some JavaScript",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: TicTacToe,
    //     link: "https://ayushmangarg2003.github.io/TicTacToe/",
    // },
    {
        name: "VibeType",
        text: "Using VibeType a person can check their typing speed, this is made using ReactJs and styled using CSS",
        tags: ["RectJs", "CSS"],
        imgsrc: VibeTypeApp,
        link: "https://ayushmangarg2003.github.io/VibeTypeApp/",
    },
    // {
    //     name: "Weather App",
    //     text: "An app that gives you the realtime information about the Weather of any City , you just need to enter the name of city  ",
    //     tags: ["HTML", "CSS" , "JavaScript" , "API"],
    //     imgsrc: WeatherApp,
    //     link: "https://ayushmangarg2003.github.io/WeatherApp/",
    // },
    {
        name: "Food Recipe App",
        text: "An app that presents you with the list of Dishes you can cook and their recipes depending upon the ingredient you type in.",
        tags: ["HTML", "CSS" , "JavaScript", "API"],
        imgsrc: FoodRecipe,
        link: "https://ayushmangarg2003.github.io/FoodRecipeApp/",
    },
    // {
    //     name: "Movie Review App",
    //     text: "I made this app to learn how to fetch an API. You can enter the name of any movie any see information about it",
    //     tags: ["HTML", "CSS" , "JavaScript" ,"API"],
    //     imgsrc: MovieReview,
    //     link: "https://ayushmangarg2003.github.io/MovieReviewApp/",
    // },
    // {
    //     name: "Name It",
    //     text: "Naming projects is one of the most irritating part of being I developer so I made a website which reccomend us good names for out Projects.",
    //     tags: ["CSS" , "ReactJs" , "API"],
    //     imgsrc: NameIt,
    //     link: "https://ayushmangarg2003.github.io/NameIt/",
    // },
    {
        name: "Personal Portfolio",
        text: "After I got a good command over HTML CSS and JavaScript, I made my Portfolio Website (The information in it is not updated )",
        tags: ["HTML", "CSS" , "JavaScript"],
        imgsrc: PersonalPortfolio,
        link: "https://ayushmangarg2003.github.io/PersonalPortfolio/",
    },
    // {
    //     name: "Binary Brains",
    //     text: "This was the Project I made in my first Hackaton. It was an online hackaton and we achieved 5th rank",
    //     tags: ["HTML", "CSS" , "JavaScript", "Hackaton"],
    //     imgsrc: BinaryBrains,
    //     link: "https://ayushmangarg2003.github.io/BinaryBrains/",
    // },
    {
        name: "Karobar Website",
        text: "This is a single page website which I make to improve my CSS skills",
        tags: ["HTML", "CSS" , "JavaScript"],
        imgsrc: Karobar,
        link: "https://ayushmangarg2003.github.io/karobarlink/",
    },
    {
        name: "Pocket Mart",
        text: "A multipage website I made to improve my command over CSS and I learnt many new things making this",
        tags: ["HTML", "CSS" , "JavaScript"],
        imgsrc: PocketMart,
        link: "https://ayushmangarg2003.github.io/PocketMart/",
    },
    // {
    //     name: "Word Counter",
    //     text: "This is a simple word counter app which I made while learning JavaScript",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: WordCounter,
    //     link: "https://ayushmangarg2003.github.io/wordCounter/",
    // },
    // {
    //     name: "Music Player",
    //     text: "A very simple Music Player whith just 4 songs, I made this while learing DOM Maipulation",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: MusicPlayer,
    //     link: "https://ayushmangarg2003.github.io/MusicPlayer/",
    // },
    // {
    //     name: "Books To do",
    //     text: "A To do App for Books, I made this while learning JavaScript",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: BooksToDo,
    //     link: "https://ayushmangarg2003.github.io/BooksToDo/",
    // },
    {
        name: "Rapido Clone",
        text: "Clone of Rapido's Webiste. I made this to improve my styling skills in CSS and learn how to make responsive Designes",
        tags: ["HTML", "CSS"],
        imgsrc: RapidoClone,
        link: "https://ayushmangarg2003.github.io/RapidoClone/",
    },
    {
        name: "OlaClone",
        text: "Clone of OLA's Webiste. I made this to improve my CSS and learn how to make responsive Designes",
        tags: ["HTML", "CSS"],
        imgsrc: OlaClone,
        link: "https://ayushmangarg2003.github.io/OlaClone/",
    },
    // {
    //     name: "Profile Card",
    //     text: "",
    //     tags: ["HTML" , "CSS"],
    //     imgsrc: ProfileCard,
    //     link: "https://ayushmangarg2003.github.io/profile/",
    // },
    // {
    //     name: "Digital Clock",
    //     text: "A Digital Clock made using JavaScript again a very basic project but this one tought me a lot",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: DigitalClock,
    //     link: "https://ayushmangarg2003.github.io/DigitalClock/",
    // },
    {
        name: "TextUtils",
        text: "This was the project through which I was introduced to ReactJs, I used Bootstrap in this project",
        tags: ["React", "Bootstarp"],
        imgsrc: TextUtils,
        link: "https://ayushmangarg2003.github.io/textutils/",
    },
    // {
    //     name: "Microsoft Clone",
    //     text: "Clone of Microsoft's Webiste. I made this to improve my styling skills in CSS and learn how to make responsive Designes",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: MicrosoftClone,
    //     link: "https://ayushmangarg2003.github.io/MicrosoftClone/",
    // },
    // {
    //     name: "Tesla Clone",
    //     text: "Clone of Tesla's Webiste. I made this to improve my styling skills in CSS and learn how to make responsive Designes",
    //     tags: ["HTML", "CSS"],
    //     imgsrc: TeslaClone,
    //     link: "https://ayushmangarg2003.github.io/TeslaClone/",
    // },
    // {
    //     name: "Portfolio",
    //     text: "",
    //     tags: ["HTML", "CSS" , "JavaScript"],
    //     imgsrc: PortfolioOld,
    //     link: "https://ayushmangarg2003.github.io/portfolio/",
    // },
    // {
    //     name: "aCodeBootstrap",
    //     text: "This was the first project I made using Bootstrap.",
    //     tags: ["Bootstrap"],
    //     imgsrc: aCodeBootstrap,
    //     link: "https://ayushmangarg2003.github.io/aCodebootstrap/",
    // },
    {
        name: "Memory Game",
        text: "The famous memory game made using HTML CSS and JavaScript. I made this to improve my command over JavaScript",
        tags: ["HTML", "CSS" , "JavaScript"],
        imgsrc: MemoryGame,
        link: "https://ayushmangarg2003.github.io/MemoryGame/",
    },
];

export default projectDetails;
