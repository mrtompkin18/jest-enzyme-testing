import React from 'react'
import { Card } from 'antd'
import Todo from './Todo'
import TodoList from './TodoList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                taskId: 1,
                task: 'Go to Home',
                isEdit: false
            }],
            input: undefined,
            id: 1
        }
    }

    onInputChange = (e) => {
        this.setState({ input: e.target.value })
    }

    addTask = () => {
        const taskId = this.state.id + 1
        const task = this.state.input
        this.setState({
            todos:
                [...this.state.todos, {
                    taskId,
                    task
                }],
            input: undefined,
            id: taskId
        })
    }

    deleteTask = (taskId) => {
        const updatedTodos = this.state.todos.filter(item => item.taskId !== taskId)
        this.setState({ todos: updatedTodos })
    }

    editTask = (item) => {
        item.isEdit = true
        this.setState({ todos: this.state.todos })
    }

    cancelEditTask = (item) => {
        item.isEdit = false
        this.setState({ todos: this.state.todos })
    }

    saveTask = (item, newText) => {
        if (newText !== undefined && newText !== '') {
            item.task = newText
        }
        item.isEdit = false
        this.setState({ todos: this.state.todos })

    }

    render() {
        return (
            <Card title="Jest Enzyme">
                <Todo
                    input={this.state.input}
                    addTask={this.addTask}
                    onInputChange={this.onInputChange}
                />
                <TodoList
                    todos={this.state.todos}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    cancelEditTask={this.cancelEditTask}
                    saveTask={this.saveTask}
                />
            </Card>
        )
    }
}
export default App