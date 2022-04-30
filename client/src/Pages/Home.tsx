import { useState } from "react";
import * as BP from "react-bootstrap";
import Navigation from "../Components/Navbar";
import images from '../Services/Data/images.json';

function Home() {
    const [lang, setLang] = useState<any>(true)
    return (
        <>
            <Navigation setLang={setLang} />

            {lang ? (
                <BP.Container className='p-5' style={{ marginTop: '40px' }}>
                    <BP.Container >
                        <div className="presentation-pt body-pt">
                            <h2>Seja bem-vindo ao site sobre Unreal Engine.</h2>
                            <p>Unreal Engine, um motor para desenvolvimento de games.</p>
                            <h4>Alohomora</h4>

                            <BP.Button variant="outline-primary">Ler Mais...</BP.Button>
                        </div>
                        <div className="bg-image">
                            <BP.CardGroup >
                                <BP.Card>
                                    <BP.Card.Img style={{ borderRadius: '20px' }} className="image-hover" variant="top" src={images[0].card_images.image_1} />
                                </BP.Card>
                                <BP.Card>
                                    <BP.Card.Img style={{ borderRadius: '20px' }} className="image-hover" variant="top" src={images[0].card_images.image_2} />
                                </BP.Card>
                                <BP.Card>
                                    <BP.Card.Img style={{ borderRadius: '20px' }} className="image-hover" variant="top" src={images[0].card_images.image_3} />
                                </BP.Card>
                            </BP.CardGroup>
                        </div>
                        <div className="Content">

                        </div>
                    </BP.Container>
                </BP.Container>
            ) : (
                <BP.Container className='p-5' style={{ marginTop: '40px' }}>
                    <BP.Container>
                        <div className="presentation-eua body-eua">
                            <h2>Welcome to the Unreal Engine website.</h2>
                            <p>Unreal Engine, an engine for game development.</p>
                            <h4>Game development</h4>

                            <BP.Button variant="outline-primary">Read More...</BP.Button>
                        </div>
                        <div className="bg-image">
                            <BP.CardGroup >
                                <BP.Card>
                                    <BP.Card.Img style={{ borderRadius: '20px' }} className="image-hover" variant="top" src="https://wallpapercave.com/wp/wp8038761.jpg" />
                                </BP.Card>
                                <BP.Card>
                                    <BP.Card.Img style={{ borderRadius: '20px' }} className="image-hover" variant="top" src="https://wallpapercave.com/wp/wp8038775.jpg" />
                                </BP.Card>
                                <BP.Card>
                                    <BP.Card.Img style={{ borderRadius: '20px' }} className="image-hover" variant="top" src="https://wallpapercave.com/wp/wp8038866.jpg" />
                                </BP.Card>
                            </BP.CardGroup>
                        </div>
                    </BP.Container>
                </BP.Container>
            )}
        </>
    )
};

export default Home;