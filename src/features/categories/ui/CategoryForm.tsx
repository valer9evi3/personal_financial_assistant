import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { addCategory } from '../../../entities/category/model/slice';
import { useAppDispatch } from '@/shared/hooks/redux';

interface CategoryFormProps {
  open: boolean;
  onClose: () => void;
}

export const CategoryForm = ({ open, onClose }: CategoryFormProps) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: '',
    type: 'expense' as const,
    icon: '🏷️',
    color: '#2196f3',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addCategory({
        id: crypto.randomUUID(),
        ...formData,
      })
    );
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label='Name'
            margin='normal'
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <RadioGroup
            row
            value={formData.type}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                type: e.target.value as 'income' | 'expense',
              }))
            }
          >
            <FormControlLabel
              value='income'
              control={<Radio />}
              label='Income'
            />
            <FormControlLabel
              value='expense'
              control={<Radio />}
              label='Expense'
            />
          </RadioGroup>
          <TextField
            fullWidth
            label='Color'
            type='color'
            margin='normal'
            value={formData.color}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, color: e.target.value }))
            }
            required
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
