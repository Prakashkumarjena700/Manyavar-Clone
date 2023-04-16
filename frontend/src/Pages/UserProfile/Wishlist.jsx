import React, { useContext, useEffect } from 'react'
import { LoggerContext } from '../../Context/LoggerContex'

export default function Wishlist() {

    const { token } = useContext(LoggerContext)

    useEffect(() => {
        getUserWishlist()
    }, [])

    const getUserWishlist = async () => {
        await fetch('https://proud-lamb-suspenders.cyclic.app/wishlists/userwishlist', {
            headers: {
                'Authorization': token
            }
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>Wishlist</div>
    )
}
