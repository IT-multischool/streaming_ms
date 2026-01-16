import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import MultiSearch from '../Search/MultiSearch'
import Botbar from './Botbar'
import './Layout.css'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="body">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      <MultiSearch 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
      <main className="main">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onSearchClick={() => setSearchOpen(true)}
        />
        <div className="main__content">
          {children}
        </div>
      </main>
      <Botbar 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onSearchClick={() => setSearchOpen(true)}
      />
    </div>
  )
}

export default Layout





