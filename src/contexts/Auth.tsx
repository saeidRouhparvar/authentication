import {createContext} from 'react'

const AuthContext = createContext<LabeledValue | undefined>(undefined)

const setLocalStorage = (key:any,value:any) => {
    try{
        localStorage.setItem(key:any,JSON.stringify(value))
    } catch (e) {
        console.error({e});
        
    }
}