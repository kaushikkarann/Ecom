import BestSeller from '../components/BestSeller'
import Collection from './Collection'
import Hero from '../components/Hero'
import LatestCollectiom from '../components/LatestCollection'
import NewsLetterBox from '../components/NewsLetterBox'
import OurPolicy from '../components/OurPolicy'
const Home = () => {
  return (
    <div >
      
      <Hero />
      <LatestCollectiom />
      <BestSeller/>
      <OurPolicy />
      <NewsLetterBox/>
    
    </div>
  )
}

export default Home
