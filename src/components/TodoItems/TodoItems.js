import React from 'react'
import './TodoItems.css'
const TodoItems = (props) => {
    const {items , deleteItem} = props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item => {
        return (
            <div key={item.id}>
                <span className="firstname"> {item.firstname} </span>
                <span className="lastname"> {item.lastname} </span>
                <span className="action icon" onClick={() => deleteItem(item.id)}> &times; </span>
            </div>
        )
    })
    ) : (
        <p>There is no users to show</p>
    )
    return (
        <div className="ListItems">
            <div>
            <span className="firstname title"> Firstname </span>
                <span className="lastname title"> Lastname</span>
                <span className="action title" > Action </span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems