import { useState, useEffect, useRef } from "react";
import Todos from "../components/Todos";
import Input from "../components/styled-components/Input";
import Button from "../components/styled-components/Button";
import { FaPlus } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const {token} = useAuth();
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [isInputShown, setIsInputShown] = useState(false);
    const [todoText, setTodoText] = useState("");
    const inputRef = useRef();
    useEffect(() => {
        async function fetchTodos(){
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}todos`);
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
    const onTodoDelete = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        if(window.confirm("Are you sure?")) {
            setTodos((current) => {
                return current.filter((todo)=>{
                    return todo.id !== id;
                })
            })
        }
    };
    const addTodo = () => {
        if(todoText.trim() !== ''){
            setTodos((current) => {
                return [{
                    id: current.length + 1,
                    title: todoText,
                    completed: false
                }, ...current];
            });
            setTodoText("");
            setIsInputShown(false);  
        }
    };
    const onAddButtonClick = () => {
        if(!isInputShown) {
            setIsInputShown(true);
            inputRef.current.focus();
        }else {
            addTodo();
        }
    };
    const onKeyUP = (e) => {
        if(e.keyCode === 13)
            addTodo();
    };
    useEffect(() => {
        if(!token)
            navigate("/login");
    });
    if(!token) return (<></>);
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.h1}>Todos List:</h1>
                <Button style={styles.button} onClick={() => onAddButtonClick()}><FaPlus /> Add Todo</Button>
                <div style={{...styles.inputContainer,
                             width: isInputShown?'100px':'0px',
                             marginInlineStart: isInputShown?'5px':'0px'}}>
                    <Input ref={inputRef}
                           style={styles.input}
                           value={todoText}
                           onChange={(e) => setTodoText(e.target.value)}
                           onKeyUp={(e) => onKeyUP(e)}/>
                </div>
            </div>
            {todos.length > 0 && <Todos todos={todos} onTodoToggle={onTodoToggle} onTodoDelete={onTodoDelete}/>}
            {todos.length === 0 && (
                <div>You have no Todos, click add todo to add some.</div>
            )}
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
    inputContainer: {
        transition: 'all 0.2s',
        width: '0px',
        overflow:'hidden'
    },
    input: {
        width: '100%'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    }
}