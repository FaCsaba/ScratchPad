import { Component, JSX } from "solid-js";
import { state } from "../store";


const setText: JSX.EventHandlerUnion<HTMLDivElement, Event> = (ev) => {
    state.setText(ev.target.innerHTML)
}

const PageTextField: Component<{}> = () => {

    return <div 
                contentEditable 
                onBlur={setText} 
                innerHTML={state.getCurrentText()} 
            />
}

export default PageTextField;

