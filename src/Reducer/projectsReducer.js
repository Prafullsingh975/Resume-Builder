export const projectsInitial = {
    titel: "",
    tec: "",
    desc: "",
    projectLink: "",
  };
  
  const projectsReducer = (projects,action) => {
    switch (action.type) {
        case "ADD":{
            return{ ...projects, [action.name]: action.value }
        }
    
        case "CLEAR":{
            return projectsInitial
        }
        case "EDIT":{
            return action.payload
        }
            
        default:
      }
  };
  
  export default projectsReducer;
  