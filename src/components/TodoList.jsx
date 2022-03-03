import React from "react";
import map from "lodash/map";

import TodoItem from "./TodoItem";

function TodoList(props) {
    const {todos, onComplete, onDelete} = props

    const _renderTodos = () => {
        return map(todos, (todo, index) => {
            return <TodoItem 
                key={index} 
                id={index} 
                onComplete={onComplete}
                onDelete={onDelete} 
                {...todo} 
            />;
        })
    }

    return ( 
        <ul className="list-group todo-list">{_renderTodos()}</ul>
    )

}

export default TodoList;
