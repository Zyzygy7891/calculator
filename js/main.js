import {'CalculatorLang'} from './lang';


const LANG = document.getElementsByTagName("html")[0]["lang"] || "hu";
const languange = CalculatorLang.get(LANG);