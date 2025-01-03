export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  categoryId: string;
  date: string;
  description?: string;
}