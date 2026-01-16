import { useEffect } from 'react'
import HeroCarousel from '../components/Carousel/HeroCarousel'
import VideoCarousel from '../components/Carousel/VideoCarousel'
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = 'Multischool Angola | Streaming'
  }, [])

  // Mock data - será substituído por dados reais da API
  const featuredVideos = [
    { id: 1, title: 'A arte do Saber', cover: '/stream/img/covers/emp.png', categories: ['Educação', 'Inovação'], duration: '01h:20', price: '19.000,00 kz', isNew: true, isPromo: true },
    { id: 2, title: 'Workshop de Tecnologia', cover: '/stream/img/covers/tech.jpeg', categories: ['Tecnologia'], duration: '45min', price: '15.000,00 kz', isNew: false, isPromo: false },
    // Adicionar mais vídeos conforme necessário
  ]

  return (
    <>
      <HeroCarousel />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">Em Destaque</h2>
            </div>
          </div>
          <VideoCarousel videos={featuredVideos} type="items" />
        </div>
      </section>
    </>
  )
}

export default Home





