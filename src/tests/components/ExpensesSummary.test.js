import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('should show summary for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={[expenses[0]]} expensesTotal={expensesTotal([expenses[0]])}/>);
    expect(wrapper.text()).toBe('Viewing 1 expense totalling $1.95');
});

test('should show summary for more than one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={expenses} expensesTotal={expensesTotal(expenses)}/>);
    expect(wrapper.text()).toBe('Viewing 3 expenses totalling $1,141.95');
});