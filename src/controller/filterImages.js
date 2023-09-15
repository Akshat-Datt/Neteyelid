function filterImages(innerArr, search){
    return innerArr.filter(item => item.topic_submissions[search]);
}

export default filterImages;