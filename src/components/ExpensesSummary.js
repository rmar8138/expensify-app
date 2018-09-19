import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import expenseCount from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = props => {
  return props.expensesCount.length === 1 ? (
    <p>
      {`Viewing ${props.expensesCount.length} expense totalling ${numeral(
        props.expensesTotal / 100
      ).format("$0,0.00")}`}
    </p>
  ) : (
    <p>
      {`Viewing ${props.expensesCount.length} expenses totalling ${numeral(
        props.expensesTotal / 100
      ).format("$0,0.00")}`}
    </p>
  );
};

const mapStateToProps = state => {
  return {
    expensesCount: expenseCount(state.expenses, state.filters),
    expensesTotal: expensesTotal(expenseCount(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
