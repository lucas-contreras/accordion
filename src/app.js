import React from "react";
import Accordion from "./components/accordion";
import { items } from "./data";

export default class App extends React.Component {
    render() {
        return (
            <Accordion data={items} />
        );
    }
}