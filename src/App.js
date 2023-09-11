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

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
