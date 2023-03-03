import { FaTrash } from 'react-icons/fa';
import styles from "./../styles/Todo.module.scss"

export default function Todos({todo, onTodoToggle, onTodoDelete}) {
    return (
        <div className={styles.todo} onClick={() => onTodoToggle(todo)}>
            <input type="checkbox" checked={todo.completed?true:false} onChange={()=>{}}/>
            <span className={styles.text} style={todo.completed?{textDecoration:'line-through'}:{}}>{todo.title}</span>
            <FaTrash onClick={(e) => onTodoDelete(e, todo.id)} style={{...iconStyles, color: '#f35f5f'}} />
        </div>
    );
}

const iconStyles = {
    flex: '0 0 30px'
}