import React from "react";
import {Container} from "reactstrap";
import JumbotronContainer from "./components/jumbotron/Jumbotron";
import LeftImageColumn from "./components/columns/LeftImageColumn";
import RightImageColumn from "./components/columns/RightImageColumn";
import SpotLightContainer from "./components/containers/SpotLightContainer";
import "./App.css";

function App() {
  const helmet = require("././assets/GiroAssets/Helmet.png");
  const helmetTest = require("././assets/GiroAssets/HelmetTest.png");
  const shoes = require("././assets/GiroAssets/GiroShoe.png");
  const bike = require("././assets/GiroAssets/Bike.png");
  const mobileHelmet = require("././assets/GiroAssets/Helmet_Mobile.png");
  const goggles = require("././assets/GiroAssets/Goggles.png");
  const goggleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  const helmetText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.";
  const helmetBackground = require("././assets/GiroAssets/HelmetBackground.png");
  return (
    <div className="App">
      <JumbotronContainer imageHeight="98vh" alt="Giro's bike helmet" fullcontainer mobileHeight="50vh" image={helmet} mobileImage={mobileHelmet}></JumbotronContainer>
      <LeftImageColumn left={goggles} text={goggleText} headline="Headline Goes Right Here" firstLeftContainer></LeftImageColumn>
      <JumbotronContainer imageHeight="30vh" mobileHeight="10vh" image={helmetBackground} mobileImage={helmetBackground} text={helmetText}></JumbotronContainer>
      <LeftImageColumn left={bike} fullscreen alt="Giro's bike helmet" firstSecondaryHeadline="Feature One" secondSecondaryHeadline="Feature Two" headline="Features" 
        firstSecondaryText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}
        secondSecondaryText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."}
      >
      </LeftImageColumn>
      <RightImageColumn
        right={shoes}
        alt="Giro's bike shoes"
        firstSecondaryHeadline="Benefit One"
        secondSecondaryHeadline="Benefit Two"
        headline="Benefits"
        firstSecondaryText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."}
        secondSecondaryText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."}
        >

      </RightImageColumn>
      <SpotLightContainer image={helmetTest}></SpotLightContainer>
      <Container className="bg-light pb-5">
        <div className = "d-flex flex-column align-items-center pt-5">
          <blockquote className="blockquote text-center col-lg-6">“…all the tech we need to increase safety without any of the drawbacks.”</blockquote>
          <img style = {{'width' : 'auto'}} alt="Cycling Weekly Logo" src={require("././assets/GiroAssets/CyclingWeeklyLogo.png")} />
        </div>
        <div className = "d-flex flex-column align-items-center pt-5 pb-5">
          <blockquote className="blockquote text-center col-lg-6">“…the safety benefits of MIPS, with more comfort and better performance.”</blockquote>
          <img  style = {{'width' : 'auto'}} alt="Cycling Weekly Logo" src={require("././assets/GiroAssets/BicyclingWeeklyLogo.png")} />
        </div>
      </Container>
    </div>
  );
}

export default App;
