import React from 'react';
import { configure, mount, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as mockData from "../../../mocks/mock-data";
import UsersList, { IUsersListProps } from './UsersList';

configure({ adapter: new Adapter() });


const props: IUsersListProps = {
    users: mockData.users,
    selectUser: jest.fn()
}

let componentWrapper: ShallowWrapper<React.Component>;

beforeEach(() => {
    componentWrapper = shallow(<UsersList {...props} />);
});


it('should render users list component correctly', () => {
    expect(componentWrapper).toMatchSnapshot();
});

it('should render one <ul> element', () => {
    expect(componentWrapper.find('ul')).toHaveLength(1);
});

it("should render  a list of users", () => {
    const userListItems = componentWrapper.find('li').length;

    expect(userListItems).toEqual(2);
});
