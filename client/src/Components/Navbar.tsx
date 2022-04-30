import { useState } from "react";
import * as BP from "react-bootstrap";

function Navigation({ setLang }: { setLang: any }) {

    const [langNav, setLangNav] = useState<any>(true)


    function Portuguese() {
        setLang(true)
        setLangNav(true)
    }

    function English() {
        setLang(false)
        setLangNav(false)
    }

    return (
        <>
            {langNav ? (
                <BP.Navbar fixed="top" bg="" variant='dark' expand="lg">
                    <BP.Container>
                        <BP.Navbar.Brand href="#home"><img
                            alt=""
                            src="https://img.icons8.com/color/48/000000/unreal-engine.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            Unreal Docs
                        </BP.Navbar.Brand>
                        <BP.Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <BP.Navbar.Collapse id="basic-navbar-nav">
                            <BP.Nav className="ms-auto">
                                <BP.Button onClick={Portuguese} variant="" ><img src="https://img.icons8.com/fluency/48/000000/brazil-circular.png" style={{ width: '20px' }} alt="" /></BP.Button>
                                <BP.Button onClick={English} variant=""><img src="https://img.icons8.com/color/48/000000/usa-circular.png" style={{ width: '20px' }} alt="" /></BP.Button>
                                <BP.Nav.Link className="Button-Custom" href="#home">Início</BP.Nav.Link>
                                <BP.Nav.Link className="Button-Custom" href="#link">Sobre</BP.Nav.Link>
                            </BP.Nav>
                        </BP.Navbar.Collapse>
                    </BP.Container>
                </BP.Navbar>
            ) : (
                <BP.Navbar fixed="top" bg="" variant='dark' expand="lg">
                    <BP.Container>
                        <BP.Navbar.Brand href="#home"><img
                            alt=""
                            src="https://img.icons8.com/color/48/000000/unreal-engine.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            Unreal Docs
                        </BP.Navbar.Brand>
                        <BP.Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <BP.Navbar.Collapse id="basic-navbar-nav">
                            <BP.Nav className="ms-auto">
                                <BP.Button onClick={Portuguese} variant="" ><img src="https://img.icons8.com/fluency/48/000000/brazil-circular.png" style={{ width: '20px' }} alt="" /></BP.Button>
                                <BP.Button onClick={English} variant=""><img src="https://img.icons8.com/color/48/000000/usa-circular.png" style={{ width: '20px' }} alt="" /></BP.Button>
                                <BP.Nav.Link className="Button-Custom" href="#home">Home</BP.Nav.Link>
                                <BP.Nav.Link className="Button-Custom" href="#link">About</BP.Nav.Link>
                            </BP.Nav>
                        </BP.Navbar.Collapse>
                    </BP.Container>
                </BP.Navbar>
            )}

        </>
    )
}

export default Navigation;