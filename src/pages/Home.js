import { useState, useEffect } from "react";
import Todos from "../components/Todos";
import Input from "../components/styled-components/Input";
import Button from "../components/styled-components/Button";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [isInputShown, setIsInputShown] = useState(false);
    useEffect(() => {
        async function fetchTodos(){
            let res = await fetch(process.env.REACT_APP_TODOS_URL);
            let todos = await res.json();
            todos = todos.slice(0, 10);
            setTodos(todos);
        };
        fetchTodos();
    }, []);
    const onTodoToggle = (todo) => {
        setTodos((current) => {
            return current.map((t) => {
                if(t.id === todo.id)
                    return {
                        ...t,
                        completed: !t.completed
                    }
                return t;
            });
        });
    };
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.h1}>Todos List:</h1>
                <Button onClick={() => setIsInputShown(!isInputShown)}>Add Todo</Button>
                <Input style={!isInputShown?{width: '0px', visibility: 'hidden'}:{width: '150px', marginInlineStart: '5px'}}/>
            </div>
            <Todos todos={todos} onTodoToggle={onTodoToggle}/>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h1: {
        flexGrow: 1
    },
    input: {
        transition: 'all 5.2s'
    }
}