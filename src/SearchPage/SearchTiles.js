import React from 'react';
import Tile from './Tile';
import './SearchTiles.css';

const SearchTiles = ({category}) => {
    let arr = ['type1', 'type2', 'type3', 'type4'];
    let randomItem = () => {
        let index = Math.floor(Math.random()*arr.length);                
        let colClass = arr[index];             
        return colClass;
    } 
    category.sort(()=>Math.random() - 0.5);
    return (
        <div className="searchTile">
            {category.map((category, key)=>{
                let val = randomItem();                                
                return <Tile key={key} title={category.title} icon={category.icon} color={val} type={category.type} link={category.link} />
            })}
        </div>
    )
}

export default SearchTiles
