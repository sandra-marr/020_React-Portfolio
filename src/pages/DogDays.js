import Container from 'react-bootstrap/Container';

import { DogCard } from '../components/Cards';

import Bentley1 from "../images/dog1.JPG";
import Bentley2 from "../images/dog2.JPG";
import Bentley3 from "../images/dog3.JPG";


const dogArr = [
    {
        id: 1,
        src: Bentley1,
        alt: "Bentley enjoys long walks through the neighborhood, but when he is tired and lays down, you are stuck until he is ready to keep going."
    },
    {
        id: 2,
        src: Bentley2,
        alt: "Bentley spent a lot of time at Ella Bailey Park in 2020, enjoying the views of the city and Mt. Rainier."
    },
    {
        id: 3,
        src: Bentley3,
        alt: "Everyonce in a while, Bentley will take a dip in the sound. Here he is after a swim near Golden Gardens."
    },

]

export default function DogDaysPage() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center">
            <h2 className="accent pb-2 text-center">Dog Days</h2>
            <p>Meet Bentley! He is a flat-coated retriever, extremly friendly, and always up for an adventure. He is a huge part of my life, so I couldn't miss an opportunity to share the joy.</p>
            <div className="container-fluid row">
                {dogArr.map((item) => (
                    <DogCard key={item.id} src={item.src} alt={item.alt}/>
                    ))
                }
            </div> 
            
        </Container>
    );
}