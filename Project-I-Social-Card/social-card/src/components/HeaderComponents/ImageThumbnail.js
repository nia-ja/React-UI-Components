import React from 'react';
import './Header.css';
// import { prependOnceListener } from 'cluster';

function ImageThumbnail (props) {
    return (
        <img src={props.src} className='image-thumbnail' alt='Lambda logo' />
    );
}

export default ImageThumbnail;