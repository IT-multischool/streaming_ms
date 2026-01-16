import { Splide, SplideSlide } from '@splidejs/react-splide'
import VideoCard from '../Video/VideoCard'
import './Carousel.css'

const VideoCarousel = ({ videos, type = 'items' }) => {
  const options = {
    type: 'loop',
    perPage: 7,
    perMove: 7,
    drag: true,
    pagination: false,
    speed: 1200,
    gap: 16,
    arrows: true,
    focus: 0,
    keyboard: false,
    breakpoints: {
      575: {
        perPage: 2,
        perMove: 2,
        speed: 800,
      },
      767: {
        perPage: 3,
        perMove: 3,
      },
      991: {
        perPage: 4,
        perMove: 4,
      },
      1399: {
        perPage: 5,
        perMove: 5,
      },
      1899: {
        perPage: 6,
        perMove: 6,
      },
    }
  }

  if (!videos || videos.length === 0) {
    return null
  }

  return (
    <Splide className={`splide splide--${type}`} options={options}>
      {videos.map((video) => (
        <SplideSlide key={video.id}>
          <VideoCard video={video} />
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default VideoCarousel





