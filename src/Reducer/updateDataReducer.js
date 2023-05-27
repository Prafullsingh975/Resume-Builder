const updateDataReducer = (updateData, action) => {
  // let arr = [];
  switch (action.id) {
    case "basic": {
      switch (action.type) {
        case "ADD": {
          return { ...updateData, [action.id]: action.data };
        }
        default: {
          throw Error("Unknown action: " + action.type + "in" + action.id);
        }
      }
    }

    case "education": {
      switch (action.type) {
        case "ADD": {
          const arr = [
            ...updateData.education,
            { ...action.data, id: updateData.education.length + 1 },
          ];
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        case "DELETE": {
          const arr = updateData.education.filter((elm) => {
            return elm.id !== action.objId;
          });
          return { ...updateData, [action.id]: arr };
        }
        case "FIND": {
          const obj = updateData.education.find((elm) => {
            return elm.id === action.objId;
          });
          const replace = {...obj,replace:true,fieldName:action.id} 
          const index = updateData.education.findIndex(
            (elm) => elm.id === action.objId
          );
          updateData.education[index] = replace;
          // const arr = updateData.education;
          // arr.splice(index,1,temp);
          // console.log("Array>>>>>>>>>>>>>>",arr);
          return { ...updateData, editableObj: obj };
        }
        case "EDIT": {
          // console.log("EDITOR>>>>>>>>>>>>>>>>>>>.");
          const index = updateData.education.findIndex(
            (elm) => elm.replace
          );
          const id = updateData.education[index].id;
          const arr = updateData.education
          arr[index] = {...action.data,id};
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        default: {
          throw Error("Unknown action: " + action.type + "in" + action.id);
        }
      }
    }

    case "experience": {
      switch (action.type) {
        case "ADD": {
          const arr = [
            ...updateData.experience,
            { ...action.data, id: updateData.experience.length + 1 },
          ];
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        case "DELETE": {
          const arr = updateData.experience.filter((elm) => {
            return elm.id !== action.objId;
          });
          return { ...updateData, [action.id]: arr };
        }
        case "FIND": {
          const obj = updateData.experience.find((elm) => {
            return elm.id === action.objId;
          });
          const replace = {...obj,replace:true,fieldName:action.id}  
          const index = updateData.experience.findIndex(
            (elm) => elm.id === action.objId
          );
          updateData.experience[index] = replace;
          return { ...updateData, editableObj: obj };
        }
        case "EDIT": {
          const index = updateData.experience.findIndex(
            (elm) => elm.replace
          );
          const id = updateData.experience[index].id;
          const arr = updateData.experience
          arr[index] = {...action.data,id};
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        default: {
          throw Error("Unknown action: " + action.type + "in" + action.id);
        }
      }
    }

    case "projects": {
      switch (action.type) {
        case "ADD": {
          const arr = [
            ...updateData.projects,
            { ...action.data, id: updateData.projects.length + 1 },
          ];
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        case "DELETE": {
          const arr = updateData.projects.filter((elm) => {
            return elm.id !== action.objId;
          });
          return { ...updateData, [action.id]: arr };
        }
        case "FIND": {
          const obj = updateData.projects.find((elm) => {
            return elm.id === action.objId;
          });
          const replace = {...obj,replace:true,fieldName:action.id}  
          const index = updateData.projects.findIndex(
            (elm) => elm.id === action.objId
          );
          updateData.projects[index] = replace;
          return { ...updateData, editableObj: obj };
        }
        case "EDIT": {
          const index = updateData.projects.findIndex(
            (elm) => elm.replace
          );
          const id = updateData.projects[index].id;
          const arr = updateData.projects
          arr[index] = {...action.data,id};
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        // case "EDIT": {
        //   const obj = updateData.projects.find((elm) => {
        //     return elm.id === action.objId;
        //   });
        //   return { ...updateData, editableObj: obj };
        // }
        default: {
          throw Error("Unknown action: " + action.type + "in" + action.id);
        }
      }
    }

    case "achivements": {
      switch (action.type) {
        case "ADD": {
          const arr = [...updateData.achivements, action.data];
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        case "DELETE": {
          const arr = updateData.achivements.filter((elm, index) => {
            return index !== action.objId;
          });
          return { ...updateData, [action.id]: arr };
        }
        case "FIND":{
          const data = updateData.achivements[action.objId];
          const obj = {fieldName:action.id,data}
          const arr = [...updateData.achivements];
          arr[action.objId] = ""
          return {
            ...updateData,editableObj:obj,[action.id]: arr
          }
        }
        case "EDIT":{
          const index = updateData.achivements.findIndex(
            (elm) => elm===""
          );
          const arr = [...updateData.achivements];
          arr[index] = action.data;
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        default: {
          throw Error("Unknown action: " + action.type + "in" + action.id);
        }
      }
    }

    case "skills": {
      switch (action.type) {
        case "ADD": {
          const arr = [...updateData.skills, action.data];
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        case "DELETE": {
          const arr = updateData.skills.filter((elm, index) => {
            return index !== action.objId;
          });
          return { ...updateData, [action.id]: arr };
        }
        case "FIND":{
          const data = updateData.skills[action.objId];
          const obj = {fieldName:action.id,data}
          const arr = [...updateData.skills];
          arr[action.objId] = ""
          return {
            ...updateData,editableObj:obj,[action.id]: arr
          }
        }
        case "EDIT":{
          const index = updateData.skills.findIndex(
            (elm) => elm===""
          );
          const arr = [...updateData.skills];
          arr[index] = action.data;
          return {
            ...updateData,
            [action.id]: arr,
          };
        }
        default: {
          throw Error("Unknown action: " + action.type + "in" + action.id);
        }
      }
    }

    default: {
      throw Error("Unknown action: " + action.type + "in" + action.id);
    }
  }
};

export default updateDataReducer;
