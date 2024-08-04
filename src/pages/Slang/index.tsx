import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@components/Dialog/'
import { Link } from 'react-router-dom'

export const Slang = () => {

  return (
    <div className='work-container'>
      <h1 className='work-title'>Slang</h1>
      <div className='breadcrumb-link'>
        <Link
          to='/'
          className='back-link'
        >
          <div className='back-icon'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.5302 7.46967C10.8231 7.76256 10.8231 8.23744 10.5302 8.53033L7.06055 12L10.5302 15.4697C10.8231 15.7626 10.8231 16.2374 10.5302 16.5303C10.2373 16.8232 9.76245 16.8232 9.46956 16.5303L5.99989 13.0607L6.53022 12.5303L5.99989 13.0607C5.4141 12.4749 5.4141 11.5251 5.99989 10.9393L9.46956 7.46967C9.76245 7.17678 10.2373 7.17678 10.5302 7.46967ZM17.5302 7.46967C17.8231 7.76256 17.8231 8.23744 17.5302 8.53033L14.0605 12L17.5302 15.4697C17.8231 15.7626 17.8231 16.2374 17.5302 16.5303C17.2373 16.8232 16.7625 16.8232 16.4696 16.5303L12.9999 13.0607C12.4141 12.4749 12.4141 11.5251 12.9999 10.9393L16.4696 7.46967C16.7625 7.17678 17.2373 7.17678 17.5302 7.46967Z'
              />
            </svg>
          </div>
          back
        </Link>
      </div>
      <div className='work-content'>
        <div className='work-description'>
          project description...
        </div>
        <div className='work-images'>
          <Dialog>
            <DialogTrigger asChild>
              {/* <img src='/work/ebf/ebf.png' alt='Earthbound Farm work screenshots' /> */}
            </DialogTrigger>
            <DialogContent>
              {/* <img src='/work/ebf/ebf.png' alt='Earthbound Farm work screenshots' /> */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
