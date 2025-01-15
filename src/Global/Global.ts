import { atom} from "recoil";

export const create=atom<boolean>({
    key:"modal",
    default:false
})

export const Share=atom({
    key:"share",
    default:false
})

export const DataContent=atom({
    key:"data",
    default:[]
})