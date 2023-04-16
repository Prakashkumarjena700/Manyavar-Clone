import React, { createContext, useState } from 'react'
import Cookies from 'js-cookie';

export const LoggerContext = createContext()

export default function LoggerContexProvider({ children }) {
    const tokenFromCookies = Cookies.get('token')
    const [token, setToken] = useState(tokenFromCookies)

    return (
        <LoggerContext.Provider value={{ token, setToken }} >{children}</LoggerContext.Provider>
    )
}
