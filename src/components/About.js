
import { Avatar } from "@mui/material"
import { Box } from "@mui/system"
const About = () => {
  return (
   
    <div className="about">
      
    <div className="about-text">
      <h1 style={{fontSize:"50px", color:"#5c0b79"}}>Hey there!</h1>
      <h1 style={{fontSize:"35px", color:"#5c0b79"}} className="d-inline">I'm Renuka</h1>
      <div className="wrapper d-inline">
    
                  <ul className="moving-text">
                   <li><span>A Web Developer...</span></li>
                   <li><span>A Designer...</span></li>
                   <li><span>An Art Lover...</span></li>
                   <li><span>A Creative thinker...</span></li>
                  
                  </ul>
                
                </div>
      <Box className="div-block">
      <Avatar
       className="avatar"
       alt="Remy Sharp"
       
       src={require("./photob.jpeg")}
       sx={{ width: 100, height: 100 }}
       />
       <Box className="about-text-new">
       <h5 style={{color: "white"}}>
       I am a Creative Software Engineer. I develop Software using Html5/CSS3, JavaScript, ReactJs,Redux. <br/>
       A big fan of simple , clean code and minimalistic design.
       </h5>
       </Box>
      
      </Box>
      
    </div>


    
  </div>
   
    
  )
}
export default About