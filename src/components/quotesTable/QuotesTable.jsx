import './Table.css'

import _1000SHIBUSDTPERP from '../../icons/1000PEPEUSDTPERP.png';
import DOGEUSDTPERP from '../../icons/APTUSDTPERP.png';
import BTCUSDTPERP from '../../icons/BTCUSDTPERP.png';
import LTCUSDTPERP from '../../icons/LTCUSDTPERP.png';
import BNBUSDTPERP from '../../icons/BNBUSDTPERP.png';
import XRPUSDTPERP from '../../icons/XRPUSDTPERP.png';
import SOLUSDTPERP from '../../icons/SOLUSDTPERP.png';
import BCHUSDTPERP from '../../icons/BCHUSDTPERP.png';
import ETHUSDTPERP from '../../icons/ETHUSDTPERP.png';
import _1000PEPEUSDTPERP from '../../icons/1000PEPEUSDTPERP.png';
import TRXUSDTPERP from '../../icons/TRXUSDTPERP.png';
import APTUSDTPERP from '../../icons/APTUSDTPERP.png';
import AVAXUSDTPERP from '../../icons/AVAXUSDTPERP.png';
import {useEffect} from "react";
import useQuotesStore from "../../stores/useQuotesStore";
import {observer, useLocalObservable} from "mobx-react-lite";
import Loader from "../loader/Loader";
import Modal from "../tableModal/Modal";

const images = {
  "1000SHIBUSDTPERP": _1000SHIBUSDTPERP,
  "DOGEUSDTPERP": DOGEUSDTPERP,
  "BTCUSDTPERP": BTCUSDTPERP,
  "LTCUSDTPERP": LTCUSDTPERP,
  "BNBUSDTPERP": BNBUSDTPERP,
  "XRPUSDTPERP": XRPUSDTPERP,
  "SOLUSDTPERP": SOLUSDTPERP,
  "BCHUSDTPERP": BCHUSDTPERP,
  "ETHUSDTPERP": ETHUSDTPERP,
  "1000PEPEUSDTPERP": _1000PEPEUSDTPERP,
  "TRXUSDTPERP": TRXUSDTPERP,
  "APTUSDTPERP": APTUSDTPERP,
  "AVAXUSDTPERP": AVAXUSDTPERP,
};

const QuotesTable = observer(({data, fetchData, active}) => {
  const store = useQuotesStore();
  const modalStore = useLocalObservable(() => ({
    isOpen: false,
    selectedRow: null,
    openModal(row) {
      this.selectedRow = row;
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  }));

  useEffect(() => {
    if (modalStore.isOpen) return;

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [active, modalStore.isOpen]);

  return (
    <>
      {store.showLoader && data?.length && <Loader />}
      <table>
        <thead>
        <tr>
          <th />
          <th>Side</th>
          <th>Size</th>
          <th>Price</th>
          <th>Best Bid Size</th>
          <th>Best Bid Price</th>
          <th>Best Ask Price</th>
          <th>Trade ID</th>
          <th>Best Ask Size</th>
          <th>Timestamp</th>
        </tr>
        </thead>
        <tbody>
        {data?.map((row) => (
          <tr key={row.sequence} onClick={() => modalStore.openModal(row)}>
            <td align="center"><img className="imageCell" src={images[row.symbol]} alt={row.symbol} /></td>
            <td>{row.side}</td>
            <td>{row.size}</td>
            <td>{row.price}</td>
            <td>{row.bestBidSize}</td>
            <td>{row.bestBidPrice}</td>
            <td>{row.bestAskPrice}</td>
            <td>{row.tradeId}</td>
            <td>{row.bestAskSize}</td>
            <td>{new Date(row.ts / 1000000).toLocaleString()}</td>
          </tr>
          ))}
        </tbody>
      </table>
      {modalStore.isOpen && (
        <Modal onClose={modalStore.closeModal} rowInfo={modalStore?.selectedRow}>
          {/*<p>{modalStore?.selectedRow}</p>*/}
        </Modal>
      )}
    </>
  )
})

export default QuotesTable
