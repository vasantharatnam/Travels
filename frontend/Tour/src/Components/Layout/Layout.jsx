import React from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Routers from '../../router/Routers'

function Layout() {
  return (
    <div>
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default Layout;
