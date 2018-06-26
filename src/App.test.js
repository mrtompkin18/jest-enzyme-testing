import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TodoList from '../src/containers/TodoList'
import Todo from '../src/containers/Todo'

Enzyme.configure({ adapter: new Adapter() });

describe('Check values in state', () => {
  it('start taskId with 1', () => {
    const wrapper = shallow(<Todo />)
    const taskId = wrapper.state().todos.id
    expect(taskId).toEqual(1)
  })
})


