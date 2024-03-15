// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'


const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: 'tabler:layout-dashboard',
      path: '/'
    },
    {
      title: 'User Profile',
      icon: 'tabler:user',
      path: '/user-profile'
    },
    {
      title: 'Agenda',
      icon: 'tabler:calendar-month',
      path: '/agenda'
    },
    {
      title: 'Points De Vente',
      icon: "tabler:building-store",
      path: '/points-de-vente'
    },
    {
      title: 'Facing',
      icon: "tabler:notes",
      path: '/facing'
    },
    {
      title: 'Prix',
      icon: "tabler:currency-euro",
      path: '/prix'
    },
  ]
}

export default navigation
