import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  const categories = [
    { name: 'Workshops', count: 120 },
    { name: 'Palestras', count: 85 },
    { name: 'Matemática', count: 210 },
    { name: 'Ciências', count: 175 },
    { name: 'Tecnologia', count: 320 },
    { name: 'Programação', count: 190 },
    { name: 'Empreendedorismo', count: 95 },
    { name: 'Educação Financeira', count: 140 },
    { name: 'Idiomas', count: 260 },
    { name: 'História', count: 180 },
    { name: 'Saúde & Bem-estar', count: 130 },
    { name: 'Psicologia & Desenvolvimento Pessoal', count: 155 },
    { name: 'Direito & Política', count: 90 },
    { name: 'Engenharia', count: 75 },
    { name: 'Arte & Design', count: 200 },
    { name: 'Música', count: 110 },
  ]

  return (
    <>
      <div 
        className={`sidebar ${isOpen ? 'sidebar--active' : ''}`}
        onClick={(e) => {
          if (window.innerWidth < 1200 && e.target.classList.contains('sidebar')) {
            onClose()
          }
        }}
      >
        <div className="sidebar__head">
          <NavLink to="/" className="sidebar__logo">
            <img src="/stream/img/logotipo.png" alt="Multischool Angola" />
          </NavLink>
        </div>

        <div className="sidebar__content">
          <div className="sidebar__menu">
            <ul className="sidebar__nav">
              <li className={location.pathname === '/app' || location.pathname === '/app/' ? 'active' : ''}>
                <NavLink to="/app">
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
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className={location.pathname === '/app/videos' ? 'active' : ''}>
                <NavLink to="/app/videos">
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
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 4l0 16" />
                    <path d="M16 4l0 16" />
                    <path d="M4 8l4 0" />
                    <path d="M4 16l4 0" />
                    <path d="M4 12l16 0" />
                    <path d="M16 8l4 0" />
                    <path d="M16 16l4 0" />
                  </svg>
                  <span>Vídeos</span>
                  <p>25 947</p>
                </NavLink>
              </li>
              <li className={location.pathname === '/app/cursos' || location.pathname === '/cursos' ? 'active' : ''}>
                <NavLink to="/app/cursos">
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
                    <path d="M4 20h16" />
                    <path d="M20 16v-10a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v10l4 -6c2.667 1.333 5.333 1.333 8 0l4 6z" />
                  </svg>
                  <span>Cursos</span>
                  <p>7 208</p>
                </NavLink>
              </li>
              <li className={location.pathname === '/app/livestream' || location.pathname === '/livestream' ? 'active' : ''}>
                <NavLink to="/app/livestream">
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
                    <path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
                    <path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
                    <path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <span>Live streaming</span>
                </NavLink>
              </li>
              <li>
                <button
                  className={`sidebar__collapsed ${categoriesOpen ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  aria-expanded={categoriesOpen}
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
                    <path d="M4 4h6v6h-6z" />
                    <path d="M14 4h6v6h-6z" />
                    <path d="M4 14h6v6h-6z" />
                    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  </svg>
                  <span>Categorias</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: categoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </button>
              </li>
              <li>
                <ul
                  className={`sidebar__nav sidebar__nav--collapse ${categoriesOpen ? 'show' : 'collapse'}`}
                >
                  {categories.map((category, index) => (
                    <li key={index}>
                      <NavLink to="/app/videos">
                        <span>{category.name}</span>
                        <p>{category.count}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <ul className="sidebar__nav">
              <li className={location.pathname === '/app/meet' || location.pathname === '/meet' ? 'active' : ''}>
                <NavLink to="/app/meet">
                  <i className="bi bi-cast" style={{ color: '#d2d2d2', paddingRight: '10px' }}></i>
                  <span> Criar Sala</span>
                </NavLink>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-calendar-event" style={{ color: '#d2d2d2', paddingRight: '10px' }}></i>
                  <span>Criar evento</span>
                </a>
              </li>
              <li className={location.pathname === '/app/podcasts' || location.pathname === '/podcasts' ? 'active' : ''}>
                <NavLink to="/app/podcasts">
                  <i className="bi bi-mic" style={{ color: '#d2d2d2', paddingRight: '10px' }}></i>
                  <span>Podcasts</span>
                </NavLink>
              </li>
              <li className={location.pathname === '/app/mentesa' || location.pathname === '/mentesa' ? 'active' : ''}>
                <NavLink to="/app/mentesa">
                  <i className="bi bi-emoji-smile" style={{ color: '#d2d2d2', paddingRight: '10px' }}></i>
                  <span>Mente sã</span>
                </NavLink>
              </li>
              <li>
                <a href="#">
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
                    <path d="M8 21l8 0" />
                    <path d="M12 17l0 4" />
                    <path d="M7 4l10 0" />
                    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                    <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  </svg>
                  <span>Ranking</span>
                </a>
              </li>
            </ul>

            <ul className="sidebar__nav">
              <li className={location.pathname === '/app/chatbot' || location.pathname === '/chatbot' ? 'active' : ''}>
                <NavLink to="/app/chatbot">
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
                    <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                    <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                    <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                    <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                  </svg>
                  <span>Chatbot</span>
                </NavLink>
              </li>
              <li>
                <a href="#">
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
                    <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
                    <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                  </svg>
                  <span>Playlists</span>
                  <p>36</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

