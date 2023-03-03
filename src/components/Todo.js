import styles from "./../styles/Todo.module.scss"
export default function Todos({todo, onTodoToggle}) {
    return (
        <div className={styles.todo} onClick={() => onTodoToggle(todo)}>
            <input type="checkbox" checked={todo.completed?true:false} onChange={()=>{}}/>
            <span style={todo.completed?{textDecoration:'line-through'}:{}}>{todo.title}</span>
        </div>
    );
}