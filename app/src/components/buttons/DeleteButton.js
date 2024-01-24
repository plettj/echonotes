import * as React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';

const SendButton = ({ onClick }) => {
  return (
    <Button variant="contained" startIcon={<DeleteIcon />} onClick={onClick} />
  )
}

export default SendButton