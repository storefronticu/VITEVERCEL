import react from '@/Assets/images/react.svg'
import tailwindcss from '@/Assets/images/tailwindcss.svg'
import typescript from '@/Assets/images/typescript.svg'
import vercel from '@/Assets/images/vercel.svg'
import vite from '@/Assets/images/vite.svg'
import Header from './Header'
import Banner from './Banner'
import DiningOptions from './DiningOptions'
import Footer from './Footer.jsx'
import Cookies from './Cookies'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Cookies />
      <figure className="w-full">
        <a href="#">
          <img
            style={{ borderColor: 'black', borderBottomWidth: '10px' }}
            className="aspect-[3/1]  w-full object-cover"
            src={
              'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
            }
            alt=""
          />
        </a>
        {/* <figcaption className="relative bottom-20 px-4 text-lg text-black">
          <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption> */}
      </figure>
      <DiningOptions />
      <Footer />
    </>
  )
}

export default App
