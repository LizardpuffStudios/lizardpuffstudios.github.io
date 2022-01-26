import React from 'react';
import './App.css';
import LinkButton from "./components/link_button/LinkButton";
import { Facebook, Github, Instagram, Reddit, Twitch, Twitter, Youtube } from "./helpers/icons/IconsPngWhite";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">Lizardpuff Studios</p>

        <LinkButton image={Facebook} link="https://www.facebook.com/LizardpuffStudios">Facebook</LinkButton>
        <LinkButton image={Github} link="https://github.com/LizardpuffStudios">GitHub</LinkButton>
        <LinkButton image={Instagram} link="https://www.instagram.com/lizardpuffstudios/">Instagram</LinkButton>
        <LinkButton image={Reddit} link="https://www.reddit.com/user/LizardpuffStudios">Reddit</LinkButton>
        <LinkButton image={Twitch} link="https://www.twitch.tv/lizardpuffstudios">Twitch</LinkButton>
        <LinkButton image={Twitter} link="https://twitter.com/LizardpuffTweet">Twitter</LinkButton>
        <LinkButton image={Youtube} link="https://www.youtube.com/channel/UCz90Qlr51WHTzqWXWpJz_8g">YouTube</LinkButton>
      </header>
    </div>
  );
}

export default App;
