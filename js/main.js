import {'CalculatorLang'} from './lang';
import {'sanitizeHTML'} from './vendor/sanitizeHtml';


const LANG = document.getElementsByTagName("html")[0]["lang"] || "hu";



function updateButtonText(buttonNodesList, languangeTextsMap, sanitizeHtmlFunc)
{
    for(let i=0,l = buttonNodesList.length; i<l; i++)
    {
        const btn = buttonNodesList[i];
        cosnt btnFunc = btn.dataset["function"];
        if(!languangeTextsMap.has(btnFunc)) continue;
        btn.innerHtml = sanitizeHtmlFunc(languangeTextsMap.get(btnFunc));
    }
}

function Init()
{
    const buttonNodes = document.querySelectorAll("#buttons>.item>.btn");
    const languangeMap = CalculatorLang.get(LANG);
    const sanitizeHtml = sanitizeHTML;
    updateButtonText(buttonNodes, languangeMap, sanitizeHtml);

    const userOperationStream = [];
    const userOperation = {
        operands:[],
        operator
    };

    window.addEventListener("keypress", keypressHandler);

}