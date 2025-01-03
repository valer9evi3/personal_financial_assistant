import { Meta, StoryObj } from '@storybook/react';

import { MySelect } from './MySelect';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

const meta: Meta<typeof MySelect> = {
  component: MySelect,
  title: 'Shared/MySelect',
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
export default meta;
type Story = StoryObj<typeof MySelect>;

const MySelectWithHooks = () => {
  const [state, setState] = useState('123');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setState(event.target.value);
  };

  let options = [
    { value: '123', label: '123' },
    { value: '456', label: '456' },
  ];

  return (
    <MySelect
      value={state}
      onChange={handleChange}
      options={options}
      label='Test label'
    />
  );
};

export const Primary: Story = {
  render: () => <MySelectWithHooks />,
};
