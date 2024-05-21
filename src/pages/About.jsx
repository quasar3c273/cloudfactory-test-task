import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Paths} from "../consts/path";
import useQuotesStore from "../stores/useQuotesStore";
import {TABS_IDS} from "../consts/tabs";
import {observer} from "mobx-react-lite";

const About = observer(() => {
  const store = useQuotesStore();
  const navigate = useNavigate();

  const handleClick = async (event, tabId, fetchFunction) => {
    event.preventDefault();
    store.setActiveTab(tabId);
    fetchFunction();
    navigate(Paths.QUOTES);
  };

  return (
    <div>
      <h1>О приложении</h1>
      <nav>
        <ul>
          <li>
            <Link
              to={Paths.QUOTES}
              onClick={(event) => handleClick(event, TABS_IDS.QUOTES_A, store.fetchTickerA)}
            >
              Котировки А
            </Link>
          </li>
          <li>
            <Link
              to={Paths.QUOTES}
              onClick={(event) => handleClick(event, TABS_IDS.QUOTES_B, store.fetchTickerB)}
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
