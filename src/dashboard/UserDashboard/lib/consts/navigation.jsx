import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '#',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'churches',
		label: 'Churches',
		path: '#',
		icon: <HiOutlineCube />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/dashboard/users',
		icon: <HiOutlineUsers />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Support Page',
		path: '/suport',
		icon: <HiOutlineCog />
	},
	{
		key: 'faq',
		label: 'FAQ',
		path: '/faq',
		icon: <HiOutlineCog />
	}
]