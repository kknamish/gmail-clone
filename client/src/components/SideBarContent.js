import { Box, Button, List, ListItem } from '@mui/material'
import React from 'react'
import { CreateOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import { SIDEBAR_DATA } from '../config/sidebar.config';

const ComposeButton = styled(Button)(({ openDrawer }) => ({
  backgroundColor: '#c2e7ff',
  color: '#001d35',
  padding: openDrawer ? '16px' : '8px',
  borderRadius: openDrawer ? '16px' : '32px',
  minWidth: openDrawer ? '140px' : '40px',
  textTransform: 'none',
  marginLeft: openDrawer ? '0' : '16px',
}));

const Container = styled(Box)(({ openDrawer }) => ({
  padding: openDrawer ? '8px' : '4px',
  '& > ul': {
    padding: '10px 0 0 5px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },
  '& > ul > li > svg': {
    marginRight: 20,
    padding: openDrawer ? '0' : '12px 0 0 5px',
  },
}));

const SideBarContent = ({ openDrawer }) => {
  return (
    <>
      <Container openDrawer={openDrawer}>
        <ComposeButton openDrawer={openDrawer}>
          <CreateOutlined />
          {openDrawer && 'Compose'}
        </ComposeButton>
        <List>
          {SIDEBAR_DATA.map(data => (
            <ListItem key={data.title}>
              {data.icon && <data.icon fontSize='small' />}
              {openDrawer && data.title}
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default SideBarContent;
