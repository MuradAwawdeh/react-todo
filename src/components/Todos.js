import Todo from "./Todo";

export default function Todos({todos, onTodoToggle}) {
    return (
        <>
        {todos.map((todo, index) => (
            <Todo key={index} todo={todo} onTodoToggle={onTodoToggle}/>
        ))}
        </>
    );
}