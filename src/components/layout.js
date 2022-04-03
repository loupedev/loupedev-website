 import * as React from "react"
 import PropTypes from "prop-types"

 import "./layout.css"
 
   return (
     <>
       <div
         style={{
           margin: `0 auto`,
           maxWidth: 960,
           padding: `0 1.0875rem 1.45rem`,
         }}
       >
         <main>{children}</main>
         <footer
           style={{
             marginTop: `2rem`,
           }}
         >
           © {new Date().getFullYear()}, <a href="https://github.com/loupedev">&#123;loupedev&#125;</a>
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout