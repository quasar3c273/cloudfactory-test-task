import React from 'react';
import { Link } from 'react-router-dom';
import {Paths} from "../consts/path";

const About = () => {
  return (
    <div>
      <h1>О приложении</h1>
      <nav>
        <ul>
          <li>
            <Link to={Paths.QUOTES}>Котировки А</Link>
          </li>
          <li>
            <Link to={Paths.QUOTES}>Котировки Б</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
