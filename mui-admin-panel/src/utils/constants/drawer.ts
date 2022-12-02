import { Dashboard, KingBed, MarkChatUnread, NotificationsActive, PeopleAlt } from "@mui/icons-material";

export const drawerWidth = 240;

export const sidebarList = [
  {title: 'Main', icon: Dashboard, link: '/'},
  {title: 'User', icon: PeopleAlt, link: '/users'},
  {title: 'Rooms', icon: KingBed, link: '/rooms'},
  {title: 'Requests', icon: NotificationsActive, link: '/requests'},
  {title: 'Messages', icon: MarkChatUnread, link: '/messages'},
];