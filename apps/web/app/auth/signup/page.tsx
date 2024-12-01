import Link from 'next/link';
import React from 'react';

const SignupPage = () => {
    return (
        <div> 
            <h1> Pagina de ingreso</h1>
            <div> </div>
            <p>ya tienes cuenta=</p>
            <Link className="underline" href={"/auth/signin"}>
            Ingresar</Link>

        </div>
    )
}

export default SignupPage;