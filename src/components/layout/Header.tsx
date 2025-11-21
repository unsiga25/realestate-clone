export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white'>
      <div className='mx-auto max-w-[1400px] px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 text-gray-700 hover:text-gray-900'>
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <span className='font-medium'>Menu</span>
            </button>
          </div>
          <div className='flex items-center gap-4'>
            <a href='/' className='flex items-center'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-red-600'>
                <svg
                  viewBox='0 0 484 64'
                  height='100%'
                  width='100%'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <path
                    className='circle'
                    d='M0.000253149 31.8258C-0.0692354 49.4759 14.1759 63.9295 31.826 63.999C49.4761 64.138 63.9298 49.8233 63.9992 32.1732C64.0687 14.5231 49.8236 0.138977 32.1735 0C32.104 0 32.0345 0 31.965 0C14.4539 0 0.13923 14.2452 0.000253149 31.8258Z'
                    fill='#E4002B'
                  ></path>

                  <path
                    className='house'
                    d='M51.5422 28.6292L34.448 11.535C33.8226 10.8401 32.9193 10.4927 32.0159 10.4927C31.1126 10.4927 30.2092 10.8401 29.5838 11.535L12.4896 28.6292C11.5168 29.602 11.1694 31.0613 11.7253 32.3816C12.2812 33.7019 13.532 34.5357 14.9217 34.5357H17.3538V47.4606C17.3538 49.3368 18.8826 50.935 20.8283 50.935H43.2036C45.0798 50.935 46.678 49.4063 46.678 47.4606V34.5357H49.1101C50.4999 34.5357 51.7507 33.7019 52.3066 32.3816C52.793 31.1308 52.5151 29.6715 51.5422 28.6292Z'
                    fill='white'
                  ></path>

                  <path
                    className='logo_text'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M155.826 46.5391C150.887 46.5391 148.035 43.5478 148.035 38.6087V10.0174H154.783V38.1913C154.783 39.8609 155.548 40.7652 157.148 40.7652H159.096V46.5391H155.826Z'
                    fill='#3D3A40'
                  ></path>
                </svg>
              </div>
              <span className='ml-2 text-xl font-bold text-gray-900'>realestate.com.au</span>
            </a>
          </div>

          <div className='flex items-center gap-4'>
            <button className='font-medium text-gray-700 hover:text-gray-900'>Sign in</button>
            <button className='rounded-full bg-red-600 px-6 py-2 font-medium text-white hover:bg-red-700'>
              Join
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
