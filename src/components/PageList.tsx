import { Component, For } from "solid-js";
import { state } from "../store";

const setPageName = (ev: {target: Element}, pageNum: number) => {
  state.setPageName(pageNum, ev.target.textContent || "")
}

const PageList: Component<{}> = () => {

  return <ul>
  <For each={state.pages}>{(page, pageNum) => {
    return <li onClick={() => {state.setCurrentPageNumber(pageNum())}}>
      <div contentEditable onBlur={(ev) => setPageName(ev, pageNum())}>{page.name}</div>
      </li>
  }}</For>
  <button onClick={state.addPage}>Add Page</button>
  </ul>
}

export default PageList;