import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'

type Member = {
  id: number
  name: string
  email: string
}
const getMembers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const members: Member[] = await response.json()
  return members
}
const GetMembersList = async () => {
  const members = await getMembers()
  console.log({ members: members })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ユーザID</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="member">
                {member.id}
              </TableCell>
              <TableCell align="right">{member.name}</TableCell>
              <TableCell align="right">{member.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GetMembersList
