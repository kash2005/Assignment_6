const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); // 30ms

const clear = () => {
    const loadingScreen = document.getElementById('sahan');
    loadingScreen.style.display='block';
}

function blurring() {
    load++
    const loadingScreen = document.getElementById('sahan');
    loadingScreen.style.display='none';
    if(load > 99) {
        clearInterval(int)
            const loadingScreen = document.getElementById('kasmi');
            loadingScreen.style.display='none';
        clear()
    }
    loadText.innerText = `${load}%`;
    // text fades out as it loads from 0 to 100 (opacity goes from '1' to '0')
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // blur starts at 30px and ends at 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
//preloader
