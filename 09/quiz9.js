console.log('quiz9');
const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn'); 
const $log = document.querySelector('#log');

function get() {
    const url = $url.value;
    // const url = fetch($url);
    console.log('url : ', url);

    fetch(url).then(res=> {
        const log = res.text();
        console.log(log);

        log.then(data => data)
    })
}

$btn.addEventListener('click', get);