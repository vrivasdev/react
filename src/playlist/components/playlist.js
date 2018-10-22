import React from 'react';
import Media from './media.js';
import './playlist.css';
import './category.css';

function Playlist(props) {
    const {categories} = props.data
    return (
      <div>
        {
          categories.map(category => {
            return(
              <div key={category.id} className="Category">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                {
                  category.playlist.map(item => {
                    return <Media {...item} key={category.id}/>
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
}

export default Playlist;
