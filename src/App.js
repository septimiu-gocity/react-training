import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Food shopping",
            day: "28th Sep",
            reminder: false,
        },
        {
            id: 2,
            text: "Walk the dog",
            day: "1st Oct",
            reminder: true,
        },
        {
            id: 3,
            text: "Laundry",
            day: "2nd Oct",
            reminder: false,
        },
    ]);

    // Delete task

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <Header />
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No tasks to show!"}
        </div>
    );
}

export default App;
