import { createContext, useContext, useState } from 'react'

const VideoContext = createContext()

export const useVideo = () => {
  const context = useContext(VideoContext)
  if (!context) {
    throw new Error('useVideo must be used within VideoProvider')
  }
  return context
}

export const VideoProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [videos, setVideos] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFavorite = (videoId) => {
    setFavorites(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    )
  }

  const isFavorite = (videoId) => favorites.includes(videoId)

  return (
    <VideoContext.Provider value={{
      favorites,
      videos,
      searchQuery,
      setSearchQuery,
      toggleFavorite,
      isFavorite,
      setVideos
    }}>
      {children}
    </VideoContext.Provider>
  )
}


