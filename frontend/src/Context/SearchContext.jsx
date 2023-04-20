import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

export default function SearchContextProvider({ children }) {
    const [gender, setGender] = useState('')
    const [category, setCategory] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [occasion, setOccasion] = useState('')
    const [collections, setCollection] = useState('')

    const [breadCrum2, setBreadCrum2] = useState('')
    const [breadCrum3, setBreadCrum3] = useState('')

    return (
        <SearchContext.Provider value={{
            gender, setGender, category, setCategory,
            size, setSize, color, setColor,
            occasion, setOccasion, collections, setCollection,
            breadCrum2, setBreadCrum2, breadCrum3, setBreadCrum3
        }} >{children}</SearchContext.Provider>
    )
}
