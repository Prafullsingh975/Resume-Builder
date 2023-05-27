export const expInitial = {
    companyName: "",
    position: "",
    from: "",
    to: "",
    profileDesc: "",
  };
const experienceReducer = (exp,action) => {
    switch (action.type) {
        case "ADD":{
            return{ ...exp, [action.name]: action.value }
        }
    
        case "CLEAR":{
            return expInitial
        }
        case "EDIT":{
            return action.payload;
          }
            
        default:
      }
};

export default experienceReducer;
