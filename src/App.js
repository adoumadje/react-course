import React, { useEffect } from "react";


const App = () => {
    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID Token: '+response.credential)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '780390404030-s0fkjo8pi2tj74t0m8f3us3da7qtr0pl.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline', size: 'large' }
        )
    }, [])

    return (
        <div className="app">
            <div id='signInDiv'></div>
        </div>
    )
}


export default App;