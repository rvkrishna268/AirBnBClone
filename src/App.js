import "./App.scss";
import Mainpage from "./components/mainpage/Mainpage";
import Topbar from "./components/topbar/Topbar";
import Topstories from "./components/topsellers/Topsellers";

function App() {
  const image = [
    {
      src: "assets/main-img1.webp",
      text:"Most Popular Around The World",
      type:"Collection"
    },
    {
      src: "assets/main-img2.webp",
      text:"Great for team building",
      type:"Collection"
    },
    {
      src: "assets/main-img3.webp",
      text:"Fun for the family",
      type:"Collection"
    },
  ];
  const fixedButtons=[
    {
      text:"Dates",
    },
    {
      text:"Group Size",
    },
    {
      text:"More filters",
    },
  ];
  const scrollableButtons=[
    {
      text:"Great for groups",
    },
    {
      text:"Family-friendly",
    },
    {
      text:"Animals",
    },
    {
      text:"Arts & writing",
    },
    {
      text:"Baking",
    },
    {
      text:"Cooking",
    },
    {
      text:"Dance",
    },
    {
      text:"Drinks",
    },
    {
      text:"Entertainment",
    },
    {
      text:"Fitness",
    },
    {
      text:"History and Culture",
    },
    {
      text:"Magic",
    },
    {
      text:"Music",
    },
    {
      text:"Social Impact",
    },
    {
      text:"Wellness",
    },
    {
      text:"Olympians & Paralympians",
    },
    {
      text:"Designed for accessibility",
    },
  ];
  const topSellers=[
    {
      Title: "Murder Mystery Escape Room Game-Perfect for Halloween",
      Poster:"assets/ts-img1.webp",
      Rating:" ★ 4.87 (600)",
      Country:" . Poland",
      Price:"From 💲1305/person",
      Heart:" ♥ "
    },
    {
      Title: "Thrilling Murder Mystery And Magic Show",
      Poster:"assets/ts-img2.webp",
      Rating:" ★ 4.92 (150)",
      Country:" . United Kingdom",
      Price:"From 💲1965/person",
      Heart:" ♥ "
    },
    {
      Title: "Holiday Mood Spiced Drinks with Dancing Indian Chef",
      Poster:"assets/ts-img3.webp",
      Rating:" ★ 4.98 (50)",
      Country:" . Germany",
      Price:"From 💲1719/person",
      Heart:" ♥ "
    },
    {
      Title: "Pasta with the Grandmas",
      Poster:"assets/ts-img4.webp",
      Rating:" ★ 4.98 (3328)",
      Country:" . Italy",
      Price:"From 💲2701/person",
      Heart:" ♥ "
    },
    {
      Title: "Teams making Curry with Dancing Indian Chef",
      Poster:"assets/ts-img5.webp",
      Rating:" ★ 5.01 (17)",
      Country:" . Germany",
      Price:"From 💲1719/person",
      Heart:" ♥ "
    },
    {
      Title: "The Circus Factory",
      Poster:"assets/ts-img6.webp",
      Rating:" ★ 4.75 (227)",
      Country:" . Portugal",
      Price:"From 💲2047/person",
      Heart:" ♥ "
    },
    {
      Title: "'True vs False' Funny Historical Game",
      Poster:"assets/ts-img7.webp",
      Rating:" ★ 4.94 (2582)",
      Country:" . Greece",
      Price:"From 💲1310/person",
      Heart:" ♥ "
    },
    {
      Title: "'No Spain no Game' The Festive Game",
      Poster:"assets/ts-img8.webp",
      Rating:" ★ 4.91 (2597)",
      Country:" . Spain",
      Price:"From 💲1310/person",
      Heart:" ♥ "
    },
    {
      Title: "Origami and the Essence of Japan",
      Poster:"assets/ts-img9.webp",
      Rating:" ★ 4.97 (490)",
      Country:" . Japan",
      Price:"From 💲676/person",
      Heart:" ♥ "
    },
    {
      Title: "Living Room Legends Scavenger Hunt",
      Poster:"assets/ts-img10.webp",
      Rating:" ★ 4.90 (2606)",
      Country:" . United States",
      Price:"From 💲1544/person",
      Heart:" ♥ "
    },
    {
      Title: "Chocolate Origins & Create with a Maker",
      Poster:"assets/ts-img11.webp",
      Rating:" ★ 4.98 (1327)",
      Country:" . Jamica",
      Price:"From 💲1219/person",
      Heart:" ♥ "
    },
    {
      Title: "Power of adaptability with Vanessa Low",
      Poster:"assets/ts-img12.webp",
      Rating:" ★ 5.00 (134)",
      Country:" . Australia",
      Price:"From 💲1845/person",
      Heart:" ♥ "
    },
  ];
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Mainpage image={image} fixedButtons={fixedButtons} scrollableButtons={scrollableButtons}/>
        <Topstories topSellers={topSellers} />
      </div>
    </div>
  );
}

export default App;
