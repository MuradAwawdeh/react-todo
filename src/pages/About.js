import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        fetch("http://localhost:8080/login")
    }, []);
    return (
        <div>
            <p>
             This is a simple todo react app, the purpose of this app is to demonstrate the use of the following react features:
            </p>
            <ul>
                <li>routing using react-router-dom</li>
                <li>styled components</li>
            </ul>
            <p>
                The app is using jsonplaceholder.typicode.com/todos API to get some todos.
            </p>
        </div>
    );
}