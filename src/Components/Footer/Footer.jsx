import React from 'react'
import "./Footer.css"
import HeaderFooter from '../HeaderFooter/HeaderFooter'
import MiddleSectionFooter from '../MiddleSectionFooter/MiddleSectionFooter'

const Footer = () => {
  return (
    <div className="footer">
      <HeaderFooter />
      <hr />
      <MiddleSectionFooter />
      <hr />
      <p>© 2026 toate drepturile sunt rezervate | Velaro</p>
    </div>
  )
}

export default Footer
