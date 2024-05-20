import React from 'react';
import { Link } from 'react-router-dom';
import {Paths} from "../consts/path";
import useQuotesStore from "../stores/useQuotesStore";
import {TABS_IDS} from "../consts/tabs";
import {observer} from "mobx-react-lite";

const About = observer(() => {
  const store = useQuotesStore();

  return (
    <div>
      <h1>О приложении</h1>
      <nav>
        <ul>
          <li>
            <Link
              to={Paths.QUOTES}
              onClick={() => store.setActiveTab(TABS_IDS.QUOTES_A)}
            >
              Котировки А
            </Link>
          </li>
          <li>
            <Link
              to={Paths.QUOTES}
              onClick={() => store.setActiveTab(TABS_IDS.QUOTES_B)}
            >
              Котировки Б
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default About;
