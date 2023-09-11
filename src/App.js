import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
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

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // Delete task

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
    };

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                "No tasks to show!"
            )}
        </div>
    );
}

export default App;
