import { Link, Outlet } from "react-router-dom"

export const Blog = () => {
    return(
        <>
          <div className="blog-container">
            <div className="left-blog-container">
             <div>
              <div className="js-blog">

              <Link to="javascript">
              <h3>JavaScript</h3>
              </Link>

              <hr/>
              <p>Scope</p>
              <p>Variables</p>
              <p>Hoisting</p>
              <p>Clouser</p>
              <p>EventLoop</p>
              <p>CallBack</p>
              <p>Promises</p>
              <p>Async/Await</p>
              
              </div>

              <div className="js-blog">

              <Link to="react">
              <h3>React</h3>
              </Link>
              
              <hr/>
              <p>Hooks</p>
              <p>Axios</p>
              <p>Virtual Dom</p>
              <p>Context Api</p>
              </div>
              
              <div className="js-blog">

              <Link to="css">
              <h3>Css</h3>
              </Link>
              
              <hr/>
              <p>Positions</p>
              <p>Flex</p>
              <p>Grid</p>
              <p>Box Model</p>
              </div>

             </div>
            
            
            
            
            </div>
            <div className="right-blog-container">
             <Outlet/>
            
            </div>
            <div className="m-right-blog-container">
            
            </div>
             
          </div>

        
        </>
    )
}