console.log("week 7");

function getFetch(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => callback.log(data));
}

getFetch('data.jason', (data) => console.log(data));