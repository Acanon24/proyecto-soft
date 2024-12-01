import React, { PropsWithChildren } from 'react'

const AuthLayout = ({children}:PropsWithChildren) => {
    return (
        <div className='bg-gradient-to-br from-lime-400'>
            {children}
        </div>
    )
}
export default AuthLayout

