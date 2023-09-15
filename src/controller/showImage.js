function showImage(innerArr, setDisplay, each, setLikes, setDesc, setInd){
    const index = innerArr.indexOf(each);
    setInd(index);
    setDisplay(innerArr[index].urls.regular);
    setLikes(innerArr[index].likes);
    setDesc(innerArr[index].alt_description.toUpperCase());
}

export default showImage;