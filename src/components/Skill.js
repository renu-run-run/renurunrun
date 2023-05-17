import ProjectCard from "./ProjectCard";
 import { Grid } from "@mui/material";

const Skill  = () =>{

  // const cardlist = [true, true , true , true, true, true, true,true];
  const cardlist1 = ["Expense Traker","Cinametic Explorer","MarkDown Previewer","The GeekGalary","Memory Card Game"];
  const linklist =["https://github.com/renu-run-run/expensetraker",
  "https://github.com/renu-run-run/cinematicexplore",
  "https://github.com/renu-run-run/states002",
  "https://github.com/renu-run-run/myGeekGallery",
  "https://github.com/renu-run-run/memorygame"
  ];
   
  const livelink = ["https://renu-run-run.github.io/expensetraker/",
  "https://cinematicexplore.netlify.app/", "https://renu-run-run.github.io/states002/",
  "https://celadon-croquembouche-3ca03a.netlify.app/","https://renu-run-run.github.io/memorygame/"];

  const images = ["Untitled.jpeg","https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg",
   "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&usqp=CAU",
   "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
   "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"];


   const content = [" An expense tracker can be used to manage and keep track of all your expenses in one place.",
   "Cinematic Explore is a website that allows you to search for movies by their name, add them to your favorites, and remove them as well. You can view the selected movies in a separate section.",
   "  This is a basic Markdown Previewer that includes a textarea for entering Markdown text and a preview tab to display the converted text.",
   "Geek Gallery is a platform that specializes in stock photography, utilizing the Unsplash API to source its images. The website enables users to easily search for images based on their name.",
   " A memory card game, also known as a matching game, is a game where players are required to match pairs of cards  with identical images or patterns."];
  return(
   <div className="project-box">
   <h1 style={{textAlign:"center",fontSize:"50px", color:"#5c0b79"}}>Projects</h1>
   <br/>
   <br/>
   <Grid container spacing={2} gap={2} m={2}>
        <ProjectCard data={cardlist1} list={linklist} image={images} contents={content} hosted={livelink}/>
        
   </Grid>
    <br/>
    <br/>
   </div>

  )
}

export default Skill

