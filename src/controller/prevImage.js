function prevImage(IMAGE_URLS, current, setCurrent){
    let position = IMAGE_URLS.indexOf(current);
    if(position === 0){
        setCurrent(IMAGE_URLS[IMAGE_URLS.length-1]);
    }
    else setCurrent(IMAGE_URLS[position-1]);
}

export default prevImage;