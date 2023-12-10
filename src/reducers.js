import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            const newUser={
                id:uuidv4(),
                name:action.name
            };
            return {
                ...state,
                users:[...state,users,newUser],
                balance:state.balance+10,
            }
        case "fuel":
            if(action.balance>50){
                return{
                    ...state,
                    balance:state.balance-50,
                }
            else{
                return state;
            }
            }
        default:
            return state
    }
};

export default reducer;
