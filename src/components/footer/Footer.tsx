import { Grid } from "@mui/material";

import './Footer.css';
import CircularButton from "../circular_button/CircularButton";
import { Facebook, Github, Instagram, Reddit, Twitch, Twitter, Youtube } from "../../helpers/icons/IconsSvgWhite";
import { Facebook as facebook, Github as github, Instagram as instagram, Reddit as reddit, Twitch as twitch, Twitter as twitter, Youtube as youtube } from "../../helpers/icons/IconsSvgColor";

function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <>
      <hr></hr>
      <h1>CONNECT WITH US</h1>
      <Grid container direction="row" justifyContent="center">
        <CircularButton image={Facebook} hoverImage={facebook} link="https://www.facebook.com/LizardpuffStudios" />
        <CircularButton image={Github} hoverImage={github} link="https://github.com/LizardpuffStudios" />
        <CircularButton image={Instagram} hoverImage={instagram} link="https://www.instagram.com/lizardpuffstudios/" />
        <CircularButton image={Reddit} hoverImage={reddit} link="https://www.reddit.com/user/LizardpuffStudios" />
        <CircularButton image={Twitch} hoverImage={twitch} link="https://www.twitch.tv/lizardpuffstudios" />
        <CircularButton image={Twitter} hoverImage={twitter} link="https://twitter.com/LizardpuffTweet" />
        <CircularButton image={Youtube} hoverImage={youtube} link="https://www.youtube.com/channel/UCz90Qlr51WHTzqWXWpJz_8g" />
      </Grid>
      <p className="copyright">&copy; {year} Lizardpuff Studios. All rights reserved.</p>
    </>
  );
}

export default Footer;
