import {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext<LabeledValue | undefined>(undefined)

const setLocalStorage = (key: any, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.error({e})
    }
}

const getLocalStorage = (key: any, initialValue: any) => {
    try {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : initialValue
    } catch (e) {
        return initialValue
    }
}


const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(() =>
        getLocalStorage('user', {loggedIn: false}),
    )
  
    useEffect(() => {
        setLocalStorage('user', user)
    }, [user])
 

    const toggleAuth = (loggedIn:boolean) => {
        setUser((prev: any) => ({
            ...prev,
            loggedIn: loggedIn,
        }))
    }
 
    const value: any = {toggleAuth: toggleAuth, user: user }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

interface IUser {
    loggedIn: boolean
}
interface LabeledValue {
    toggleAuth: (loggedIn:boolean) => void,
    user: IUser,
 
}

const useAuth = () => {
    const context: LabeledValue | undefined = useContext(AuthContext)

    if (context === undefined)
        throw new Error('useAuth must be within AuthProvider!')

    return context
}

export {AuthProvider, useAuth}
