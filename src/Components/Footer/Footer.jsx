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
      <p></p>
    </div>
  )
}

export default Footer
