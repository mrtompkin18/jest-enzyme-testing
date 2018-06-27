import React from 'react'
import { List, Button, Col, Row, Input } from 'antd'
const ListItem = List.Item

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { newText: undefined }
    }

    onEditTaskChange = (e) => {
        this.setState({ newText: e.target.value })
    }

    getButtons = (item) => {
        const { editTask, cancelEditTask, deleteTask, saveTask } = this.props
        if (item.isEdit) {
            return (
                <div style={{ float: 'right' }}>
                    <Button
                        style={{ marginRight: 7 }}
                        onClick={() => saveTask(item, this.state.newText)}>
                        save
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => cancelEditTask(item)}>
                        cancel
                    </Button>
                </div>
            )
        } else {
            return (
                <div style={{ float: 'right' }}>
                    <Button
                        style={{ marginRight: 7 }}
                        onClick={() => editTask(item)}>
                        edit
                    </Button>
                    <Button
                        disabled={item.isEdit}
                        onClick={() => deleteTask(item.taskId)}>
                        delete
                    </Button>
                </div>
            )
        }
    }

    renderText = (item) => {
        if (item.isEdit) {
            return (<Input defaultValue={item.task} onChange={this.onEditTaskChange} />)
        } else {
            return <div id="taskText" style={{ marginTop: 6, marginLeft: 12 }}>{item.task}</div>
        }
    }

    renderList = (item) => {
        return (
            <ListItem>
                <Row gutter={8} style={{ width: '100%' }}>
                    <Col
                        span={2}
                        style={{ fontWeight: 'Bold' }}>
                        <div id="taskId">#{item.taskId}</div>
                    </Col>
                    <Col span={16}>
                        {this.renderText(item)}
                    </Col>
                    <Col span={6}>
                        {this.getButtons(item)}
                    </Col>
                </Row>
            </ListItem>
        )
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                <br />
                <List
                    itemLayout="horizonal"
                    dataSource={todos}
                    renderItem={item => this.renderList(item)}
                />
            </div>
        )
    }
}
export default TodoList