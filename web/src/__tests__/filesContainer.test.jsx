/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilesContainer from '../components/filesContainer';

Enzyme.configure({ adapter: new Adapter() });

const filesMock = [
  {
    id: '7405cad8db781b166de002da8f996fe84049e100',
    name: 'directory_1',
    type: 'tree',
    path: 'directory_1',
    mode: '040000',
  },
  {
    id: 'd564d0bc3dd917926892c55e3706cc116d5b165e',
    name: 'directory_2',
    type: 'tree',
    path: 'directory_2',
    mode: '040000',
  },
  {
    id: 'f248cabd580ad48d40ebcf5c8e0122784fe32f73',
    name: '.gitignore',
    type: 'blob',
    path: '.gitignore',
    mode: '100644',
  },
];

const setup = () => {
  const wrapper = shallow(<FilesContainer projectId={14448940} branch="master" />);
  wrapper.instance().setState({ files: filesMock });
  return wrapper;
};

describe('files table should render properly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('assert that contains the right number of rows', () => {
    expect(wrapper.find('tbody').children()).toHaveLength(3);
  });

  test('assert that icon item is present', () => {
    expect(wrapper.find('img')).toHaveLength(3);
  });

  test('assert that file name is right', () => {
    wrapper.find('.file-name-link').forEach((node, index) => {
      expect(node.children().text()).toBe(filesMock[index].name);
    });
  });
});
