import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";
import { Screen } from "./AppStyles";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Screen>
      <Logo />
      <Questions  count={count} setCount={setCount} />
      <Footer count={count} />
    </Screen>
  );
}

export default App;