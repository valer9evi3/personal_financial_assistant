import { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { MyInput } from './MyInput';

const meta: Meta<typeof MyInput> = {
  component: MyInput,
  title: 'Shared/MyInput',
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};
export default meta;
type Story = StoryObj<typeof MyInput>;

const MyInputWithHooks = () => {
  const [state, setState] = useState('');
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState(event.target.value);
  };

  return <MyInput value={state} onChange={handleChange} label='Test label' />;
};

export const Primary: Story = {
  render: () => <MyInputWithHooks />,
};
