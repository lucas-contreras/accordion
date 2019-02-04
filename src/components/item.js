import React from "react";
import "./item.css";

const Item = ({ currentId, setCurrentItem, data }) => {
    const { id, title, content } = data;
    const isOpen = currentId == id;

    return (
        <div className="accordion-item">
            <div className="title" onClick={() => setCurrentItem(id)}>{title}</div>
            <div className={`content${!isOpen ? " close" : ""}`}>
                {content}
            </div>
        </div>
    );
}

export default Item;