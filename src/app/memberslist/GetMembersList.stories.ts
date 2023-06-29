import type { Meta, StoryObj } from '@storybook/react'

import { GetMembersList } from './GetMembersList'

const meta: Meta<typeof GetMembersList> = {
  title: 'Example/GetMembersList',
  component: GetMembersList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}
