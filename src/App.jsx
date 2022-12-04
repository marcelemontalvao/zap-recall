import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
import "./assets/css/reset.css"
import "./assets/css/style.css"
import { useState } from "react";


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="screen-container">
      <Logo />
      <Questions  count={count} setCount={setCount} />
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;