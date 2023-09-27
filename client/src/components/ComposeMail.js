import React from 'react'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import { Close, DeleteOutline } from '@mui/icons-material'

const dialogStyle = {
    height: '80%',
    width: '80%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0px 0px'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    backgroundColor: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: '10px'
    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
})

const SendButton = styled(Button)({
    backgroundColor: '#0B57D0',
    color: '#fff',
    borderRadius: '32px',
    textTransform: 'none',
    fontWeight: 500,
    width: 100
})

const ComposeMail = ({ openDialog, setOpenDialog }) => {

    const closeComposeMail = (e) => {
        e.preventDefault()
        setOpenDialog(false)
    }

  return (
    <Dialog 
        open={openDialog}
        PaperProps={{ sx:dialogStyle }}
    >
        <Header>
            <Typography>New Message</Typography>
            <Close fontSize='small' color='action' onClick={ (e) => closeComposeMail(e) } />
        </Header>
        <RecipientsWrapper>
            <InputBase placeholder='Recipients'/>
            <InputBase placeholder='Subject'/>
        </RecipientsWrapper>
        <TextField 
            multiline
            rows={20}
            sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
        />
        <Footer>
            <SendButton>Send</SendButton>
            <DeleteOutline />
        </Footer>
    </Dialog>
  )
}

export default ComposeMail