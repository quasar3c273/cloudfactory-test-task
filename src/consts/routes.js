import {Paths} from "./path";
import About from "../pages/About";
import Quotes from "../pages/Quotes";

export const routes = [
  { path: Paths.ABOUT, element: <About />, name: 'О приложении' },
  { path: Paths.QUOTES, element: <Quotes />, name: 'Котировки' },
];

// цветовая палитра
// #d34166 - красный
// #65598d - фиолетовый

