import React, { Component } from "react";
import Item from "./item";

class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentItemId: -1
        }

        this.setCurrentItem = this.setCurrentItem.bind(this);
    }

    setCurrentItem(id) {
        if (id == this.state.currentItemId) {
            id = -1;
        }

        this.setState({ currentItemId: id });
    }

    render() {
        const { setCurrentItem } = this;
        const { currentItemId } = this.state;

        return (
            <div>
                {this.props.data.map(i =>
                    <Item
                        data={i}
                        key={i.id}
                        currentId={currentItemId}
                        setCurrentItem={setCurrentItem}
                    />
                )}
            </div>
        );
    }
}

export default Accordion;