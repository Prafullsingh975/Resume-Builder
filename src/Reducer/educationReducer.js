export const eduInitial = {
    institute: "",
    cgpa: "",
    session: "",
    branch: "",
    course: "",
  };
const educationReducer = (edu,action) => {
  switch (action.type) {
    case "ADD":{
        return{ ...edu, [action.name]: action.value }
    }

    case "CLEAR":{
        return eduInitial
    }
    case "EDIT":{
      return action.payload;
    }
        
    default:return"" 
  }
};

export default educationReducer;
