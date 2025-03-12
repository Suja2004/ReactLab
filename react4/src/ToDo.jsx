import { useState } from "react";

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const ToggleTask = (index) => {
        const updatesTasks = [...tasks];
        updatesTasks[index].completed = !updatesTasks[index].completed;
        setTasks(updatesTasks);
    }

    const deleteTask = (index) => {
        const updatesTasks = tasks.filter((_, i) => i != index);
        setTasks(updatesTasks);
    }

    return (
        <div style={styles.container}>
            <h1>React To-Do List</h1>
            <div>
                <input type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter a Task..."
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.addButton}>Add Task</button>
            </div>
            <ul style={styles.list}>
                {tasks.map((task, index) => (
                    <li key={index} style={task.completed ? styles.completedTask : styles.pendingTask}>
                        <span onClick={() => ToggleTask(index)} style={{ cursor: 'pointer' }}>
                            {index + 1},{task.completed ? '✔️' : '❌'}{task.text}
                        </span>
                        <button name="delete" onClick={() => deleteTask(index)} style={styles.deleteButton}>🗑️</button>
                    </li>

                ))}

            </ul>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial,sans-serif',
        marginTop: '50px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '250px',
    },
    addButton: {
        marginLeft: '10px',
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    list: {
        listStyle: 'disc',
        padding: '50px',
        marginTop: '20px',
    },
    pendingTask: {
        padding: '10px',
        fontSize: '18px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    completedTask: {
        padding: '10px',
        fontSize: '18px',
        textDecoration: 'line-through',
        color: 'gray',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteButton: {
        backgroundImage: 'linear-gradient(to top, #3cf ,#c3f',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
        padding: '1rem',
        borderRadius:'.5rem',
        boxShadow:'0 0 10px 0 #3cf'
    }
}
export default ToDo;