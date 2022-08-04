import { Component, createEffect, onCleanup } from 'solid-js';

import PageList from './components/PageList';
import PageTextField from './components/PageTextField';

import { state } from './store';

const App: Component = () => {

  onCleanup(()=> {
    console.log("CLEANING UP")
    localStorage.setItem("pages", JSON.stringify(state.pages))
  })

  return <>
    <PageTextField />
    <PageList />
  </>
};

export default App;
