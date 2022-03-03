import { useEffect, useState } from "react";

import TodoList from "./components/TodoList";

function App() {
    // Todo title
    const [title, setTitle] = useState('');

    // Todo list
    const [todos, setTodos] = useState(() => {
        // Get todos from local storage
        const saveTodos = localStorage.getItem('et-todos');

        if (saveTodos) {
            return JSON.parse(saveTodos);
        }

        return [];
    })

    // Use effect to run once the component mounts
    useEffect(() => {
        localStorage.setItem('et-todos', JSON.stringify(todos));
    }, [todos])

    // Set title on change event
    const _onChangeTitle = (event) => {
        const title = event.target.value;
        setTitle(title)
    }

    // Add todo on enter press
    const _onEnterPressAdd = (event) => {
        if (13 === event.keyCode) {
            _onClickAdd()
        }
    }

    // Creae new todos
    const _onClickAdd = (event) => {
        // Don't submit if the input is an empty string
        if (title !== "") {
            
            setTodos([
                ...todos,
                {
                    id: todos.length,
                    title: title,
                    complete: false
                }
            ])
        }

        setTitle("")
    }

    // On completed
    const _onCompleteTodo = (id) => {
        const updatedTodo = [...todos]
        updatedTodo[id].complete = !updatedTodo[id].complete;
        setTodos(updatedTodo)
    }

    // On delete
    const _onDeleteTodo = (id) => {
        const updatedTodo = [...todos]

        updatedTodo.splice(id, 1)

        setTodos([...updatedTodo])
    }

    const _renderHeader = () => {
        return (
            <div className="todos-app-header card-header">
                <h2>ToDo</h2>
                <div className="input-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="What do you need to do?"
                        className="form-control add-new-todo"
                        onChange={_onChangeTitle}
                        onKeyDown={_onEnterPressAdd}
                        value={title}
                    />
                    <div className="input-group-append">
                        <button
                        className="btn btn-success"
                        type="button"
                        onClick={_onClickAdd}
                        >
                        <span
                            className=""
                            style={{
                            fontSize: "24px",
                            lineHeight: "16px",
                            }}
                        >
                            +
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-6 offset-md-3 mt-2">
                    <div className="todos-app card">
                    {_renderHeader()}
                        <div className="card-body">
                            <TodoList
                            todos={todos}
                            onComplete={_onCompleteTodo}
                            onDelete={_onDeleteTodo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
