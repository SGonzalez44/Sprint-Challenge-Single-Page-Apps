import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/location" component={LocationList}/>
      <Route path="/character" component={CharacterList}/>
      <Route path="/episode" component={EpisodeList}/>
    </main>
  )};