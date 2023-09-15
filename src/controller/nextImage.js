function nextImage(IMAGE_URLS, current, setCurrent){
    let position = IMAGE_URLS.indexOf(current);
    if(position === IMAGE_URLS.length-1){
        setCurrent(IMAGE_URLS[0]);
    }
    else setCurrent(IMAGE_URLS[position+1]);
}

export default nextImage;