import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";
import { Screen } from "./AppStyles";
import { useState } from "react";
import InitialPage from "../InitialPage/InitialPage";

const App = () => {
  const [count, setCount] = useState(0);
  const [initialPage, setInitialPage] = useState(true);

  return (
      initialPage ?
      <InitialPage setInitialPage={setInitialPage} /> 
      :
      <Screen>
        <Logo />
        <Questions  count={count} setCount={setCount} />
        <Footer count={count} />
      </Screen>
  );
}

export default App;