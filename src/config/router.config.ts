import InifinityList from '../pages/InfinityList'
import ImageLazyLoad from '../pages/ImageLazyLoad'

const routers = [
  {
    id: 1,
    name: '虚拟列表',
    path: '/infinity-list',
    component: InifinityList,
  },
  {
    id: 2,
    name: '图片懒加载',
    path: '/image-lazy-load',
    component: ImageLazyLoad,
  },
]

export default routers
