import './Layout.css'

import Nav from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer.jsx'

const Layout = ({user, handleLogout, children}) => (
  <div className='layout'>
    <Nav user={user}
    handleLogout ={handleLogout}
    />
      <div className="layout-children">
          {children}
      </div>
      <Footer />
  </div>
)

export default Layout