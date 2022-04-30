import { useState } from 'react';
import * as BP from "react-bootstrap";
import AdBlockWarning from "./Components/AdblockWarning";
import Routes from './Routes/Routeator';
import './app.css';


function App() {
    const [show, setShow] = useState<any>(false)
    return (
        <>
            <AdBlockWarning setShow={setShow} />
            <BP.Modal show={show}>
                <BP.Modal.Header>
                    <BP.Modal.Title>AdBlock Ligado!</BP.Modal.Title>
                </BP.Modal.Header>
                <BP.Modal.Body>
                    <p>
                        Por favor, desative o Adblock para continuar na página.
                        <br />
                        Nos ajude a manter o site funcionando.
                    </p>
                </BP.Modal.Body>
            </BP.Modal>
            <Routes />
        </>
    )
}

export default App;