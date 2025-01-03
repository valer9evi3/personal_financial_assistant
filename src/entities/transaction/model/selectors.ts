import { RootState } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectTransactions = (state: RootState) => state.transactions.items;

export const selectTotalBalance = createSelector(
  selectTransactions,
  (transactions) =>
    transactions.reduce((acc, transaction) => {
      return transaction.type === 'income'
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0)
);

export const selectIncomeTotal = createSelector(
  selectTransactions,
  (transactions) =>
    transactions
      .filter((t) => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0)
);

export const selectExpenseTotal = createSelector(
  selectTransactions,
  (transactions) =>
    transactions
      .filter((t) => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0)
);