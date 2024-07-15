import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './compoents/NavigationBar'
import ImageSlider from './compoents/ImageSlider'
import FeaturedProduct from './compoents/FeaturedProduct'
import Bene from './compoents/Bene'
import Test from './compoents/Test'
import Testimonial from './compoents/Testimonial'
import Blog from './compoents/Blog'
import Footer from './compoents/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    <NavigationBar />
    <ImageSlider />
    <FeaturedProduct />
    <Bene />
    <Test />
    <Testimonial />
    <Blog />
    <Footer />
    
    
    
    
    
      
    </ div>
  )
}

export default App
