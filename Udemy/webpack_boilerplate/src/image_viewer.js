import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import './scss/app.scss'; // anything non js needs file extension



const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);
 // no need to export any code or objects