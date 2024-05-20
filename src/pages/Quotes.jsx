import React, {useEffect} from 'react';
import { observer } from "mobx-react-lite";
import {ButtonTab} from "../components/tabs/ButtonTab";
import QuotesTable from "../components/quotesTable/QuotesTable";
import useQuotesStore from "../stores/useQuotesStore";

const Quotes = observer(() => {
  const store = useQuotesStore();

  useEffect(() => {
    store.fetchTickerA();
  }, []);

  useEffect(() => {
    console.log(store.quotesA)
  }, [store.quotesA]);

  const items = [
    { id: 'quotesA', title: 'Котировки А', content: 'йцуйцу' },
    { id: 'quotesB', title: 'Котировки Б', content: '123123123' },
  ];

  const [active, setActive] = React.useState(null);
  const openTab = (e) => setActive(e.target.dataset.id);

  return (
    <>
      <h1>Котировки</h1>
      <div className="tab">
        {items.map((item) => (
          <ButtonTab
            key={item.id}
            item={item}
            clickTabButton={openTab}
          />
        ))}
      </div>
      {items.find(item => item.id === active) && <QuotesTable {...items.find(item => item.id === active)} />}
    </>
  );
});

export default Quotes;
