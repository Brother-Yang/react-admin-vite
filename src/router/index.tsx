import { Outlet } from 'react-router-dom'

const Test3 = () => {
  return <div>Test3</div>
}
const Test2 = () => {
  return <div>Test2</div>
}
const Test1 = () => {
  return (
    <div>
      Test1
      <Outlet />
    </div>
  )
}

const routes = [
  {
    path: '/',
    element: <Test1 />,
    children: [
      {
        path: 'Test3',
        element: <Test3 />,
      },
    ],
  },
  {
    path: '/test2',
    element: <Test2 />,
  },
]

export default routes
