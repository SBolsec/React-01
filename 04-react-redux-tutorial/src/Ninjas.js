import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
    const ninjaList = ninjas
        .filter(ninja => {
            return ninja.age > 20;
        })
        .map(ninja => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
                </div>
            );
        });

    return (
        <div className="ninja-list">
            { ninjaList}
        </div>
    );
}

export default Ninjas;