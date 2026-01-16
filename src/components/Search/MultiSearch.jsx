import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useVideo } from '../../context/VideoContext'
import './MultiSearch.css'

const MultiSearch = ({ isOpen, onClose }) => {
  const { searchQuery, setSearchQuery } = useVideo()
  const [searchType, setSearchType] = useState('Todos')
  const inputRef = useRef(null)

  const searchTypes = ['Todos', 'Vídeos', 'Live streaming', 'Cursos', 'Canais Televisivos', 'Rádio']
  const tags = ['#Em Alta', '#Palestras', '#Cursos', '#Tecnologia', '#Treinamentos', '#TvZimbo25', '#RadioLuanda']

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && window.innerWidth >= 768) {
        const multisearch = document.querySelector('.multisearch')
        const searchButtons = document.querySelectorAll('.header__search, .botbar__btn--search')
        
        if (multisearch && !multisearch.contains(e.target) && 
            !Array.from(searchButtons).some(btn => btn.contains(e.target))) {
          onClose()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div className={`multisearch ${isOpen ? 'multisearch--active' : ''}`}>
      <div className="multisearch__content">
        <form className="multisearch__form" onSubmit={(e) => e.preventDefault()}>
          <div className="dropdown multisearch__dropdown">
            <button
              className="multisearch__dropdown-btn"
              type="button"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{searchType}</span>
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
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </button>

            <div className="dropdown-menu multisearch__dropdown-menu">
              <ul className="multisearch__dropdown-list">
                {searchTypes.map((type) => (
                  <li
                    key={type}
                    className={searchType === type ? 'active' : ''}
                    onClick={() => setSearchType(type)}
                  >
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <input
            ref={inputRef}
            type="text"
            id="msit"
            className="multisearch__input"
            placeholder="Pesquisar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button className="multisearch__close" type="button" onClick={onClose}>
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
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </form>

        <div className="multisearch__tags">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`multisearch__tag ${index === 0 ? 'active' : ''}`}
              type="button"
              onClick={() => setSearchQuery(tag.replace('#', ''))}
            >
              <span>{tag}</span>
            </button>
          ))}
        </div>

        {searchQuery && (
          <div className="multisearch__results">
            <div className="row g-3">
              {/* Results will be populated here */}
              <div className="col-12">
                <p style={{ color: '#fff', padding: '20px', textAlign: 'center' }}>
                  Resultados da pesquisa para: {searchQuery}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MultiSearch





