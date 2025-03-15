import React, { useState } from 'react';
import useGetCharacters from './hooks/useGetCharacters';
import './index.css';

const CATEGORIES = ['Saiyan', 'Namekian', 'Human'];

export const DragonBallApi = () => {
    const [setCategory] = useState('1');
    const url = "https://dragonball-api.com/api/characters/";
    const { characters, isLoading, hasError } = useGetCharacters(url);

    const onSelectionChange = (event) => {
        setCategory(event.target.value);
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (hasError) {
        return <h2>Error: {hasError.message}</h2>;
    }

    return (
        <div className="dragonball-container">
            <h1>DragonBall API</h1>
            <div className="select-container">
                <select name="categories" id="categories" onChange={onSelectionChange} className='boton'>
                    {CATEGORIES.map((item, index) => (
                        <option value={item} key={index + 1}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div className="characters-list">
                {characters.map((character) => (
                    <div key={character.id} className="character-card">
                        <div>
                            <h2>Personaje {character.name}</h2>
                            <h2>Maxima capacidad de Ki obtenido: {character.maxKi}</h2>
                            <p className='p'>{character.description}</p>
                        </div>
                        <img src={character.image} alt={character.name} className='img' />
                    </div>
                ))}
            </div>
        </div>
    );
};
