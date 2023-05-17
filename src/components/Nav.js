import { Link } from "react-router-dom"

const Nav = () =>{
    return(
     <div className="Nav">
       
       <div className="nav-left">
          
          <Link to='/About' style={{paddingLeft: 3, textDecoration: 'none'}}><h3>Home</h3></Link>
          <Link to='/Skill' style={{paddingLeft: 3, textDecoration: 'none'}}><h3>Projects</h3></Link>
          <Link to='/blog' style={{paddingLeft: 3, textDecoration: 'none'}}><h3>Blog</h3></Link>
         
       </div>
       <div></div>
     </div>
    )
}
export default Nav