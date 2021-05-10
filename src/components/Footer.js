import React from "react";

const Footer = ({ username, link }) => {
  return (
    <footer>
      created by <a href={link}>{username}</a>- devChallenges.io
    </footer>
  );
};

export default Footer;
