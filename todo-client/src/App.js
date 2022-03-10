import React, { useState, useEffect } from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";

import { useStyles } from './App.styles'
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "./services/taskServices";

const App = () => {
    const [todos, setTodos] = useState({
        tasks: [{}],
        curTask: ''
    })

    const styles = useStyles();

    useEffect(() => {
        // try {
        //     const { data } =  getTasks();

        //     setTodos( {
        //         ...todos,
        //         tasks: data
        //     } );
        // } catch (error) {
        //     console.log(error);
        // }

        const fetchData = async () => {
            const { data } = await getTasks()

            setTodos( {
                ...todos,
                tasks: data
            } );
        }

        fetchData()
            .catch(console.error)

    }, [])

    const handleChange = ({ currentTarget: input }) => {
        setTodos( {
            ...todos,
            curTask: input.value
        } );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = todos.tasks;

        try {
            const { data } = await addTask( todos.curTask );
            const tasks = originalTasks;

            tasks.push(data);

            setTodos({ tasks, curTask: "" });
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async (currentTask) => {
        const originalTasks = todos.tasks;

        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);

            tasks[index] = { ...tasks[index] };
            tasks[index].completed = !tasks[index].completed;

            setTodos({ 
                ...todos,
                tasks 
            });

            await updateTask(currentTask, {
                completed: tasks[index].completed,
            });
        } catch (error) {
            setTodos({ 
                ...todos,
                tasks: originalTasks 
            });

            console.log(error);
        }
    };

    const handleDelete = async (currentTask) => {
        const originalTasks = todos.tasks;

        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );

            setTodos({ 
                ...todos,
                tasks 
            });

            await deleteTask(currentTask);
        } catch (error) {
            setTodos({ 
                ...todos,
                tasks: originalTasks
            });

            console.log(error);
        }
    };


    
    return (
        <div className="App flex">
            <Paper elevation={3} className="container">
                <div className={styles.heading}>TO-DO</div>
                <form
                    className={styles.flex}
                    onSubmit={handleSubmit()}
                >
                    <TextField
                        variant="outlined"
                        size="small"
                        className={styles.input_todo}
                        value={todos.curTask}
                        required={true}
                        onChange={handleChange()}
                        placeholder="Add New TO-DO"
                    />
                    <Button
                        className={styles.submit}
                        color="primary"
                        variant="outlined"
                        type="submit"
                    >
                        Add task
                    </Button>
                </form>
                <div>
                    {todos.tasks && todos.tasks.map((task) => (
                        <Paper
                            key={task._id}
                            className={`${styles.flex} ${styles.task_container}`}
                        >
                            <Checkbox
                                checked={task.completed}
                                onClick={handleUpdate(task._id)}
                                color="primary"
                            />
                            <div
                                className={` ${styles.task} 
                                    ${task.completed 
                                    ? styles.line_through 
                                    : ''}
                                `}
                            >
                                {todos.task}
                            </div>
                            <Button
                                color="secondary"
                                onClick={() => handleDelete(todos.tasks._id)}
                            >
                                delete
                            </Button>
                        </Paper>
                    ))}
                </div>
            </Paper>
        </div>
    );
}


export default App;
