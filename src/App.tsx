import { Fragment } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import SocialButton from "./components/SocialButton";

function App() {
  return (
    <Fragment>
      <div>
        <h1 className="title">Hi, I'm Marco</h1>
        <h3>Check out my projects</h3>
        <p className="textSecondary">
          Looks like there's nothing to announce currently. I better get started
          on some projects!
        </p>
        <h3>Socials</h3>
        <div className="social">
          <SocialButton name="GitHub" link="https://github.com/MaKraMc" />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
