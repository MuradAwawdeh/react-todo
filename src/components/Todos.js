import Todo from "./Todo";

export default function Todos({todos, onTodoToggle, onTodoDelete}) {
    return (
        <>
        {todos.map((todo, index) => (
            <Todo key={index} todo={todo} onTodoToggle={onTodoToggle} onTodoDelete={onTodoDelete}/>
        ))}
        </>
    );
}