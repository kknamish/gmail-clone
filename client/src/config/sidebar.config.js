import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: InboxOutlinedIcon
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarBorderOutlinedIcon
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlinedIcon
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlinedIcon
    },
    {
        name: 'trash',
        title: 'Trash',
        icon: DeleteOutlinedIcon
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutlinedIcon
    }
]