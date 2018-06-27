import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme'
import { shallow } from 'enzyme'
import App from './containers/App'

configure({ adapter: new Adapter() });
describe('Todos Testing', () => {
  it('start taskId with 1 ', () => {
    const wrap = shallow(<App />)
    expect(wrap.state().id).toEqual(1)
  })

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})