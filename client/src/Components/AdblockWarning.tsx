import { useEffect } from 'react';
import { useDetectAdBlock } from 'adblock-detect-react';


function AdBlockWarning({ setShow }: { setShow: any }) {

    const adBlockDetected = useDetectAdBlock();

    function handleShow() {
        setShow(true);
    }

    useEffect(() => {
        if (adBlockDetected) {
            handleShow()
        }
    })

    return (
        <>
        </>
    )
}

export default AdBlockWarning;