import React, { useState } from "react";
import TodoForm from './newTodoForm'
import Todo from './todo'

function TodoList() {
    const [formData, setFormData] = useState([]);

    const add = boxObj => {
        setFormData(formData => [...formData, boxObj]);
    };

    const remove = id => {
        setFormData(todos => todos.filter(todo => todo.id !== id));
    };
    
    const Todos = formData.map(e => (
        <Todo key={e.id} id={e.id} title={e.title} content={e.content} remove={remove} />
    ));

    return (
            <div className="todoList">
                <TodoForm createTodo={add} />
                {Todos}
            </div>
    );
}

export default TodoList;
