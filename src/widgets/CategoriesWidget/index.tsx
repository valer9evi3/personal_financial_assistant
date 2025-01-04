'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { CategoryForm } from '../../features/categories/ui/CategoryForm';
import { useAppSelector } from '@/shared/hooks/redux';

export const CategoriesWidget = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const categories = useAppSelector((state) => state.categories.items);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant='h6'>Categories</Typography>
          <Button
            variant='contained'
            //startIcon={<Plus size={20} />}
            onClick={() => setIsFormOpen(true)}
          >
            Add Category
          </Button>
        </Box>
        <List>
          {categories.map((category) => (
            <ListItem key={category.id}>
              <ListItemIcon sx={{ color: category.color }}>
                {category.icon}
              </ListItemIcon>
              <ListItemText
                primary={category.name}
                secondary={
                  category.type.charAt(0).toUpperCase() + category.type.slice(1)
                }
              />
            </ListItem>
          ))}
        </List>
        <CategoryForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </CardContent>
    </Card>
  );
};
