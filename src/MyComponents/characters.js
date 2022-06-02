import React from 'react';

const statusColor = (status) => {
    if(status == 'Alive'){
        return 'green'
    }else if(status == 'Dead'){
        return 'red'
    }else{
        return 'gray'
    }
};

const characters = ({name, image, status, location, gender, species}) => (
    <div className='card'>
        <img src={image}/>
        <div className={`status-info ${statusColor(status)}`}>{status}</div>
        <div className="card-info">
            <h3>{name}</h3>
        </div>
        <div className="info-over">
            <div className='species-gender'>{species} - {gender}</div>
            <div>Last Location</div>
            <small>{location.name}</small>
        </div>
    </div>
);

export default characters;