export const achivInitial = "";

const achivementReducer = (achivement,action) => {
    switch (action.type) {
        case "ADD":{
            return action.value
        }
    
        case "CLEAR":{
            return achivInitial
        }
        case "EDIT":{
            return action.payload.data
        }
            
        default:
      }
};

export default achivementReducer;