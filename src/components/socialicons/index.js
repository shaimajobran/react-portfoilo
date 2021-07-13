import React from "react";
import "./style.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export default function Socialicons(params) {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialprofils.twitter}>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href={socialprofils.github}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socialprofils.linkedin}>
            <FaLinkedin />
          </a>
        </li>
        {/* <li>
          <a href={socialprofils.resume}>
            <FaText/>
          </a>
        </li> */}
      </ul>
      <p>Follow Me</p>
    </div>
  );
}
