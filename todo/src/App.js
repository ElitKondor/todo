import React, { Component } from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";

import "./App.css";

class App extends Component {
    state = { tasks: [], currentTask: "" };
    /*
     * TO-DO: 
     * - form onSubmit 
     * - input onChange
     * - checkbox onClick
     * - delete button onClick
     */
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        className="flex"
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            className="input-todo"
                            value={tasks.currentTask}
                            required={true}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            className="submit"
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add task
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <Button
                                    color="secondary"
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
}

export default App;
