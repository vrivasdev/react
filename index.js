import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media.js';

const app = document.getElementById('app')

render(<Media title="¿Qué es responsive Design?" author="Víctor Rivas" image="./images/covers/bitcoin.jpg"/>, app); // renderizar
