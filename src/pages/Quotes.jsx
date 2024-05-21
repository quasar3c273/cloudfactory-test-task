import React from 'react';
import { observer } from "mobx-react-lite";
import {ButtonTab} from "../components/tabs/ButtonTab";
import QuotesTable from "../components/quotesTable/QuotesTable";
import useQuotesStore from "../stores/useQuotesStore";
import {TABS_IDS} from "../consts/tabs";
import ErrorBubble from "../components/ErrorBubble/ErrorBubble";

const Quotes = observer(() => {
  const store = useQuotesStore();
  const openTab = (e) => store.setActiveTab(e.target.dataset.id);

  const items = [
    { id: TABS_IDS.QUOTES_A, title: 'Котировки А', data: store.quotesA?.data, fetchData: store.fetchTickerA },
    { id: TABS_IDS.QUOTES_B, title: 'Котировки Б', data: store.quotesB?.data, fetchData: store.fetchTickerB },
  ];


  return (
    <>
      <h1 style={{textAlign: 'center'}}>Котировки</h1>
      {store.hasError && <ErrorBubble show={store.hasError} />}
      <div className="tab">
        {items.map((item) => (
          <ButtonTab
            key={item.id}
            item={item}
            clickTabButton={openTab}
            fetchData={item.fetchData}
            active={store.activeTab}
          />
        ))}
      </div>
      {store.activeTab ? (
          items?.find(item => item.id === store.activeTab) &&
            <QuotesTable
              active={store.activeTab}
              {...items.find(item => item.id === store.activeTab)}
              store={store}
            />
        ) : (
          <div style={{textAlign: "center"}}>Выберите котировку</div>
      )}
    </>
  );
});

export default Quotes;
