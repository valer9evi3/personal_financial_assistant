import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';

import { addTransaction } from '../../../entities/transaction/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';

interface TransactionFormProps {
  open: boolean;
  onClose: () => void;
}

export const TransactionForm = ({ open, onClose }: TransactionFormProps) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.items);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    categoryId: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        id: crypto.randomUUID(),
        ...formData,
        amount: Number(formData.amount),
      })
    );
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Transaction</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label='Title'
            margin='normal'
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
          <TextField
            fullWidth
            type='number'
            label='Amount'
            margin='normal'
            value={formData.amount}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, amount: e.target.value }))
            }
            required
          />
          <TextField
            select
            fullWidth
            label='Category'
            margin='normal'
            value={formData.categoryId}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, categoryId: e.target.value }))
            }
            required
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            type='date'
            label='Date'
            margin='normal'
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
            required
          />
          <TextField
            fullWidth
            label='Description'
            margin='normal'
            multiline
            rows={2}
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' variant='contained'>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
