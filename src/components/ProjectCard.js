import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

// <CardMedia
// component="img"
// height="194"
// image={require('./projectf.jpg')}
// alt="Paella dish"
// />

  

const ProjectCard = ({data,list,image,contents,hosted}) =>{
    console.log(data);
    console.log(list);
    // const [expanded, setExpanded] = React.useState(false);
    // const handleExpandClick = () => {
    // setExpanded(!expanded);
    // };


    return(
        <>
        <div className='project-card'>
          <div className='project-card-left'>
            
            <h3>HTML</h3>
            <div className='html'>
            <div className='html-in'></div>
            </div>
            <h3>CSS</h3>
            <div className='html'>
            <div className='css-in'></div>
            </div>
            <h3>JavaScript</h3>
            <div className='html'>
            <div className='js-in'></div>
            </div>
            <h3>React</h3>
            <div className='html'>
            <div className='react-in'></div>
            </div>
            <h3>Redux</h3>
            <div className='html'>
            <div className='redux-in'></div>
            </div>
          
          </div>
          <div className='project-card-right'>
        {list.map((ele, index) => {
          const linkContent = data[index];
          const hostedLink = hosted[index];
          const github = list[index];
          const singleContent = contents[index];
          console.log(ele);
           return(
            <Card style={{margin: "10px"}} sx={{ maxWidth: 345 }}>
               <CardHeader
               titleTypographyProps={{variant:'h5' }}
               title={linkContent}
  
                />
       
              
              
              <CardContent>
               <Typography variant="body2" color="text.secondary">
                {singleContent}
                <br/><a  href={github}>Github link</a> &nbsp;
                <a href={hostedLink}>Live link</a>
                </Typography>
              </CardContent>
            </Card>
              )
       
                })}
           </div>
        </div>
        
        
        </>
    
    );
}

export default ProjectCard




