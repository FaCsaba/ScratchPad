import { createMutable } from "solid-js/store";
import { Page } from "./interfaces.d";
import { createEffect } from "solid-js";

function getPagesFromLocalStorage(): Page[] {
    let localPagesString = localStorage.getItem("pages");
    if (!localPagesString) return [{name: "New Page", text: ""}];
    try {
      let localPages = JSON.parse(localPagesString);
      return (localPages);
    } catch (error) {
      return [{name: "New Page", text: ""}];
    }
}

function getLocalCurrentPage(): number {
    let localCurrPage = localStorage.getItem("currPage");
    if (!localCurrPage) return 0;
    try {
        return Number.parseInt(localCurrPage) || 0;
    } catch (error) {
        console.error("CurrPage has been set incorrectly previously!")
        return 0;
    }
}

export const state = createMutable({
    pages: getPagesFromLocalStorage(),
    currPageNumber: getLocalCurrentPage(),
    
    setText: (text: string) => {state.pages[state.currPageNumber].text = text},
    setCurrentPageNumber: (pageId: number) => {localStorage.setItem("currPage", String(pageId)); state.currPageNumber = pageId},
    setPageName: (pageNum: number, text: string) => {state.pages[pageNum].name = text},
    
    getCurrentText: () => {return state.pages[state.currPageNumber].text},
    getCurrentPage: () => {return state.pages[state.currPageNumber]},

    addPage: () => {state.pages.push({name: "New Page", text: "Write Something!"})},
});


createEffect(() => {
    localStorage.setItem("pages", JSON.stringify(state.pages));
})

console.log(state);