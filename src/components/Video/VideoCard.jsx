import { Link } from 'react-router-dom'
import { useVideo } from '../../context/VideoContext'
import './VideoCard.css'

const VideoCard = ({ video }) => {
  const { toggleFavorite, isFavorite } = useVideo()
  const favorite = isFavorite(video.id)

  return (
    <div className="item">
      <div className="item__cover">
        <img src={video.cover} alt={video.title} />
        <Link to={`/app/stream/${video.id}`} className="item__play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 4v16l13 -8z" />
          </svg>
        </Link>
        {video.price && (
          <span className="item__rate item__rate--gold">
            <span>{video.price}</span>
          </span>
        )}
        <button
          className={`item__favorite ${favorite ? 'item__favorite--active' : ''}`}
          type="button"
          onClick={() => toggleFavorite(video.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
          </svg>
        </button>
        <div className="item__labels">
          {video.isNew && (
            <span className="item__new" title="New release">Novo</span>
          )}
          {video.isPromo && (
            <span className="item__promo" title="Early access">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>
            </span>
          )}
        </div>
      </div>
      <div className="item__content">
        <h2 className="item__title">
          <Link to={`/app/stream/${video.id}`}>{video.title}</Link>
        </h2>
        <span className="item__category">
          {video.categories?.map((cat, index) => (
            <Link key={index} to="#">{cat}</Link>
          ))}
        </span>
        {video.duration && (
          <div className="item__hash" title="Recente">
            <i className="bi bi-clock" style={{ color: '#fff' }}></i>
            <span>{video.duration}</span>
            {video.timeAgo && <span>- {video.timeAgo}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoCard

