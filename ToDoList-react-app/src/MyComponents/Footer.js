import React from 'react'
import './footer.css'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    backgroundColor: "red",
    border:"2px solid red"
    //   <footer className ="bg-dark text-light py-3"
    //  style= {footerStyle}> how to add in html
  }
  return (
    <footer className ="bg-dark text-light py-3">
         <p className ="text-center">
         Copyright &copy;MyTodosList.com
         </p>
       
    </footer>
  )
}
