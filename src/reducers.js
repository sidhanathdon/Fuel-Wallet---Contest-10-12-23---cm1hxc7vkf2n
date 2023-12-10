import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            const newUser={
                id:uuidv4(),
                name:action.name
            };
            return [...state,newUser];
        case 'fuel':
            if(action.balance>50){
                action.setBalance(action.balance-50)
            }
            return state;
        default:
            return state
    }
};

export default reducer;
