export const basicInitial = {
  fullName:"",
  email:"",
  github:"",
  linkedIN:"",
  website:""
}

const basicReducer = (basic, action) => {
    switch (action.type) {
      case "ADD":{
        return { ...basic, [action.name]: action.value }
      }
    
      default:{
        throw Error('Unknown action: ' + action.type + 'in' + action.id);
      }
    }
  };

export default basicReducer;
