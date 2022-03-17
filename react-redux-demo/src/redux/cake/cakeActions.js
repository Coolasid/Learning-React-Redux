import { BUY_CAKE} from "./cakeActionsType"

export const buyCake = (payload) =>{
    return {
        type: BUY_CAKE,
        payload:payload
    }
}
