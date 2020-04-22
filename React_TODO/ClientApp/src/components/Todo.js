import React, { useState } from "react";
import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

function TodoItem({ todoobj, doneTodo }) {

    const handleDone = e => {
        e.preventDefault();
        doneTodo(todoobj.id);
    };

    return (
        <div className="uk-card uk-card-hover uk-card-small uk-card-body">
            
            <input type="checkbox"
                   checked={todoobj.done}
                   onChange={handleDone}
                   className="uk-checkbox"
                   style={{ marginTop: 0 }} />

            <span className={(todo.done?'done':'undone')}>{todoobj.id} - {todoobj.description}}</span>

        </div>
    );
};

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="todoform">
            <div className="uk-inline uk-width-1-1 ">
                <span className="uk-form-icon" uk-icon="icon: plus"></span>
                <input
                    type="text"
                    className="uk-input"
                    placeholder="Nova tarefa..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
}

function Todo() {


    const [todos, setTodos] = useState([
        { id: 1, description: "Learn about React", done: false },
        { id: 2, description: "Meet friend for lunch", done: false },
        { id: 3, description: "Build really cool todo app", done: false }
    ]);

    const addTodo = desc => {
        const newTodos = [...todos, { id: todos.length + 1, description: desc, done: false }];
        toast.success("Nova tarefa adicionada: '" + desc + "'.", {
            position: "top-right",
            autoClose: 5000,
            transition: Flip,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        setTodos(newTodos);
    };

    const done = id => {
        const tododone = todos.find(x => x.id == id);
     
        if (tododone) {
            let idx = todos.indexOf(tododone);
            tododone.done = true;
            const newTodos = todos;

            newTodos.splice(idx, 1, tododone);

            toast.warn("Tarefa '" + tododone.description + "' concluida.", {
                position: "top-right",
                autoClose: 5000,
                transition: Flip,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setTodos(newTodos);
            console.log(newTodos);
            console.log(todos);
        }

       
    }


    return (

        <div>
            <h1 className="uk-heading-small">Todo</h1>
            <p className="uk-article-meta">This component demonstrates a Todo feature.</p>
            <div className="todo-list uk-width-1-1">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (

                    <TodoItem
                        key={index}
                        index={index}
                        todoobj={todo}
                        doneTodo={done}
                    />
                ))}

                <p className="uk-article-meta">Tarefa(s):  <span className="uk-badge"> {todos.length}</span></p>
            </div>
        </div>

    );
}
export default Todo;

