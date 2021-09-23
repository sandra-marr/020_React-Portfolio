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

    const style = {
        background: 'transparent',
        color: 'transparent'
    };


    
    return (
        <div className="card w-100 p-2 mb-3">
            <div className="row g-0">
                <div class="col-md-8">
                    <img src={props.src} className="card-img mx-auto col" alt={props.name}/>
                </div>
                <div class="col-md-4">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title">{props.name}</h5>
                        <a href={props.deployed} target="_blank" rel="noreferrer">Deployed Application</a>
                        <a href={props.github} target="_blank" rel="noreferrer">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function DogCard(props) {
return (
    <div className="col-sm-4 mb-3">
        <img className="rounded img-fluid responsive-img" src={props.src} alt={props.alt}/>
    </div>
   
     
);
}