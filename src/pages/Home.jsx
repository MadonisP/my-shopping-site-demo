import Annauncement from '../components/Annauncement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Annauncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home