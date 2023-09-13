import React from 'react'
import { Drawer } from '@mui/material'
import SideBarContent from './SideBarContent'

const Sidebar = ({ openDrawer }) => {
  const width = openDrawer ? 250 : 75
  return (
    <Drawer
      anchor='left'
      open={true}
      hideBackdrop={true}
      ModalProps={{
        keepMounted: true
      }}
      variant='persistent'
      sx={{
        '& .MuiDrawer-paper': {
          marginTop: '64px',
          width: width,
          backgroundColor: '#f4f8fc',
          borderRight: 'none',
          height: 'calc(100vh - 64px)'
        }
      }}
    >
      <SideBarContent openDrawer={openDrawer}/>
    </Drawer>
  )
}

export default Sidebar