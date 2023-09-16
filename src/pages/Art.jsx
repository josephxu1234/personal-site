import React from 'react';
import { PhotoAlbum } from 'react-photo-album';

import betared from '../images/artportfolio/beta_red.png'
import speedmaster from '../images/artportfolio/speedmaster_sketch.png'
import harvestmouse from '../images/artportfolio/harvestmouse_acrylic.png'
import koi from '../images/artportfolio/koi_watercolor.png'
import lotus from '../images/artportfolio/lotus_acrylic.png'
import secretarybird from '../images/artportfolio/secretary_bird.png'

const photos = [
    { src: speedmaster, width: 400, height: 300 },
    { src: betared, width: 400, height: 300 },
    { src: lotus, width: 300, height: 400 },
    { src: harvestmouse, width: 300, height: 400 },
    { src: koi, width: 300, height: 400 },
    { src: secretarybird, width: 300, height: 400 },

];
function Art() {
    return <div className="mt-10"><PhotoAlbum layout="rows" photos={photos} /></div>;
}

export default Art;