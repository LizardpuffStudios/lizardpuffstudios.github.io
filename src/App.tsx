import React from 'react';
import './App.css';
import LinkButton from "./components/link_button/LinkButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">
          Lizardpuff Studios
        </p>

        <LinkButton link="https://www.facebook.com/LizardpuffStudios">Facebook</LinkButton>
        <LinkButton link="https://github.com/LizardpuffStudios">GitHub</LinkButton>
        <LinkButton link="https://www.instagram.com/lizardpuffstudios/">Instagram</LinkButton>
        <LinkButton link="https://www.reddit.com/user/LizardpuffStudios">Reddit</LinkButton>
        <LinkButton link="https://www.twitch.tv/lizardpuffstudios">Twitch</LinkButton>
        <LinkButton link="https://twitter.com/LizardpuffTweet">Twitter</LinkButton>
        <LinkButton link="https://www.youtube.com/channel/UCz90Qlr51WHTzqWXWpJz_8g">YouTube</LinkButton>
      </header>
    </div>
  );
}

export default App;
