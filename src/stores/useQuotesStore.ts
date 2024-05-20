import { useLocalObservable } from "mobx-react-lite";
import { runInAction } from "mobx";
import {TABS_IDS} from "../consts/tabs";

const ourApi = 'http://localhost:3001/api/v2/tickers'

const useQuotesStore = () => useLocalObservable(() => ({
  tickerData: null,
  quotesA: null,
  quotesB: null,
  activeTab: TABS_IDS.QUOTES_A,
  showLoader: false,
  async fetchTickerA() {
    try {
      runInAction(() => {
        this.showLoader = true;
      });
      const response = await fetch(ourApi);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const halfLength = Math.ceil(data.data.length / 2);
      const firstHalf = data.data.slice(0, halfLength);

      console.log('Запрос для первого таба')

      runInAction(() => {
        this.quotesA = {...data, data: firstHalf};
      });
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      runInAction(() => {
        this.showLoader = false;
      });
    }
  },
  async fetchTickerB() {
    try {
      runInAction(() => {
        this.showLoader = true;
      });
      const response = await fetch(ourApi);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const halfLength = Math.ceil(data.data.length / 2);
      const secondHalf = data.data.slice(halfLength, data.data.length);

      console.log('Запрос для второго таба')

      runInAction(() => {
        this.quotesB = {...data, data: secondHalf};
        this.showLoader = false;
      });
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      runInAction(() => {
        this.showLoader = false;
      });
    }
  },
  async setActiveTab(tabId: string) {
    this.activeTab = tabId;
  },
  async setLoaderStatus(status: boolean) {
    this.showLoader = status;
  },
}));

export default useQuotesStore;
