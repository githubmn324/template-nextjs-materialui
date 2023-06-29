'use client'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'

// type Kitten = {
//   name: string
//   description: string
//   age: number
//   imageUrl: string
// }

const GetKittensList = async ({ kittens }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="left">description</TableCell>
            <TableCell align="right">age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kittens.map((kitten, id) => (
            <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="kitten">
                {kitten.name}
              </TableCell>
              <TableCell align="left">{kitten.description}</TableCell>
              <TableCell align="right">{kitten.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GetKittensList
