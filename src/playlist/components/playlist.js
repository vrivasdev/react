import React from 'react';

import Media from './media';
import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';
import Pause from '../../icons/components/pause';

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
                <div className="Playlist">
                  <Play
                    size={50}
                    color="red"
                  />
                <Volume
                  size={50}
                  color="blue"
                />
              <Pause
                  size={50}
                  color="green"
                />
                {
                  category.playlist.map(item => {
                    return <Media {...item} key={item.id}/>
                  })
                }
                </div>
              </div>
            )
          })
        }
      </div>
    )
}

export default Playlist
