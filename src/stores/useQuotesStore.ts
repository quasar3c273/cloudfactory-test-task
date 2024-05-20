import { useLocalObservable } from "mobx-react-lite";

const oldApi ='https://futures-api.poloniex.com/api/v2/tickers'
const ourApi = 'http://localhost:3001/api/v2/tickers'

const useQuotesStore = () => useLocalObservable(() => ({
  tickerData: null,
  quotesA: null,
  quotesB: null,
  async fetchTickerA() {
    try {
      const response = await fetch(ourApi);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.quotesA = data;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  },

  // async fetchTickerB() {
  //   try {
  //     const response = await fetch('https://futures-api.poloniex.com/api/v2/tickers');
  //     const data = await response.json();
  //     this.quotesB = data;
  //   } catch (error) {
  //     console.error('Ошибка:', error);
  //   }
  // }
}));

export default useQuotesStore;
