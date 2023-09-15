import axios from "axios";

async function toDataURL(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    downloadBlob(blob)
}

function downloadImage(access, index, innerArr){
    const download = innerArr[index].links.download_location;
    const endpoint = `${download}&client_id=${access}`;
    console.log(endpoint);
    axios
    .get(endpoint)
    .then((response) => {
        let url = response.data.url;
        toDataURL(url);
    })
}


function downloadBlob(blob, name = 'img.png') {
    // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
    const blobUrl = URL.createObjectURL(blob);
  
    // Create a link element
    const link = document.createElement("a");
  
    // Set link's href to point to the Blob URL
    link.href = blobUrl;
    link.download = name;
  
    // Append link to the body
    document.body.appendChild(link);
  
    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    );
  
    // Remove link from body
    document.body.removeChild(link);
  }

export default downloadImage;