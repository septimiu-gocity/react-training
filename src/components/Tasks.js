import React from "react";

const Tasks = ({ tasks }) => {
    return (
        <React.Fragment>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </React.Fragment>
    );
};

export default Tasks;
