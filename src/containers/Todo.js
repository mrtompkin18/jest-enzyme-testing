import React from 'react'
import { Input, Col, Row, Button } from 'antd'
class Todo extends React.Component {
    render() {
        const { input, addTask, onInputChange } = this.props
        return (
            <Row gutter={8} >
                <Col span={22}>
                    <Input
                        id="task"
                        size="large"
                        placeholder="Please input your task"
                        value={input}
                        onChange={onInputChange} />
                </Col>
                <Col span={2}>
                    <Button
                        id="addButton"
                        size="large"
                        onClick={addTask}
                        style={{ width: '100%', float: 'right' }}>
                        Add
                    </Button>
                </Col>
            </Row >
        )
    }
}
export default Todo