import {useState} from 'react';

export function SkillCard(props) {
    return (
        <div className="card m-1 cardbackground">
                <div className="card-body">
                    {props.name}
                </div>
        </div>
    )
}

export function WorkCard(props) {

    const [ styles, setStyle ] = useState({});

    const  MouseOver = (event) => {
        setStyle({
            background: 'transparent',
            color: 'transparent'
            })

       
    }
    const  MouseOut = (event) => {
        setStyle({})
    }
    
    return (
        <div className="card col-sm-4 p-2 mb-3">
            <img src={props.src} className="card-img mx-auto" alt={props.name}/>
            <div className="card-img-overlay responsive-img d-flex flex-column justify-content-center align-items-center" style={styles}>
                <h5 className="card-title">{props.name}</h5>
                <a href={props.deployed} target="_blank" rel="noreferrer">Deployed Application</a>
                <a href={props.github} target="_blank" rel="noreferrer">GitHub Repository</a>
                <button type="button" className="preview pt-3" onMouseOver={MouseOver} onMouseOut={MouseOut} style={styles}>Preview</button>
            </div>
        </div>
    );
}

export function DogCard(props) {
return (
    <div className="container-fluid row">
        <div className="col-sm-4 mb-3">
            <img className="rounded img-fluid responsive-img" src={props.src} alt={props.alt}/>
        </div>
    </div> 
);
}