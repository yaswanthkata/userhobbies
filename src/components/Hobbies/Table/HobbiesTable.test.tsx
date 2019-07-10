import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HobbiesTable, { IHobbiesTableProps } from './HobbiesTable';
import * as mockData from "../../../mocks/mock-data";
import HobbyTableRow from '../HobbyTableRow/HobbyTableRow';

const props: IHobbiesTableProps = {
    hobbies: mockData.hobbies,
    onRemove: () => jest.fn()
}

let componentWrapper: ShallowWrapper<React.Component>;

beforeEach(() => {
    componentWrapper = shallow(<HobbiesTable {...props} />);
});

it('should render hobbies table component correctly', () => {
    expect(componentWrapper).toMatchSnapshot();
});

it('should render one <table> element', () => {
    expect(componentWrapper.find('table')).toHaveLength(1);
});

it("should render  a list of rows with hobbies", () => {
    const numberOfHobbyRows = componentWrapper.find(HobbyTableRow).length;

    expect(numberOfHobbyRows).toEqual(2);
});