import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist.js';
import data from './src/api.json';

const app = document.getElementById('app')

render(<Playlist data={data}/>, app); // renderizar
