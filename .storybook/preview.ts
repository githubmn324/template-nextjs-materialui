import type { Preview } from '@storybook/react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/material-icons'

import '@mui/material/Paper'
import '@mui/material/Table'
import '@mui/material/TableBody'
import '@mui/material/TableCell'
import '@mui/material/TableContainer'
import '@mui/material/TableHead'
import '@mui/material/TableRow'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
