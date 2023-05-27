
const curdModeReducer = (state,action) => {
  switch (action.type) {
    case "DELETE":{
        return !action.isActive;
    }

    case "EDIT":{
        return !action.isActive;
    }
  
    default:{
        throw Error('Unknown action: ' + action.type)
    }
  }
};

export default curdModeReducer;
