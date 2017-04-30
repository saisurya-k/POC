import React from 'react';

export function Todo(props) {
    const { todo } = props;
    if (todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoList(props) {
    const { todos } = props;
    return (
        <div className='todo'>
            <input type='text' placeholder='Add todo' />
        </div>
        <ul className='todo__list'>
            {todos.map(todo => {
                <li key={todo.id} className='todo__item'>
                    <Todo todo={todo} />
                </li>
            })}

        </ul>
    );
}