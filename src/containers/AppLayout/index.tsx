import { Header } from '@components/Header'
import { Outlet } from 'react-router-dom'


export const AppLayout = () => {

  return (
    <>
      <main className='container'>
        <Header />
        <div className='content-container'>
          <Outlet />
        </div>
      </main>
    </>
  )
}
