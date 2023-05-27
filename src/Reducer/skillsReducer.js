export const skillsInitial = "";

const skillsReducer = (skills,action) => {
    switch (action.type) {
        case "ADD":{
            return action.value
        }
    
        case "CLEAR":{
            return skillsInitial
        }
        case "EDIT":{
            return action.payload.data
        }
            
        default:
      }
};

export default skillsReducer;
