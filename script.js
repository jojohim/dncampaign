const link = "https://spreadsheets.google.com/feeds/list/1T_mU2cORXFXz42HwlTCSxByo4oLjrCdvINHzhiolD5M/od6/public/values?alt=json";

window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleRowData) {
    console.log('singleRowData - console');
    console.log(singleRowData.gsx$title.$t);

    const template = document.querySelector('template').content;
    const clone = template.cloneNode(true);
    const h2 = clone.querySelector('h2');
    h2.textContent = singleRowData.gsx$title.$t;

    const h3_span = clone.querySelector('h3 span');
    h3_span.textContent = singleRowData.gsx$name.$t;

    const ytLink = "https://www.youtube.com/embed/" + singleRowData.gsx$youtubeembed.$t;

    console.log(ytLink)
    console.log("1");
    console.log("2");

    clone.querySelector('iframe').src = ytLink;

    document.querySelector('.youtube').appendChild(clone);
}

