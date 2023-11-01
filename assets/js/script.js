const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); // 30ms

window.addEventListener('load', ()=>{
    $('#navbar-nav>a').eq(0).css("color", "#435334" );
    $('#navbar-nav>a').eq(1).css("color", "#94A686" );
    $('#navbar-nav>a').eq(2).css("color", "#94A686" );
    $('#navbar-nav>a').eq(3).css("color", "#94A686" );
});

const clear = () => {
    const loadingScreen = document.querySelector('#sahan');
    loadingScreen.style.display = 'block';

    const loadingScreen1 = document.querySelector('.customerManage');
    loadingScreen1.style.display = 'none';

    const loadingScreen2 = document.querySelector('.itemManage');
    loadingScreen2.style.display = 'none';
    const loadingScreen3 = document.querySelector('.header');
    loadingScreen3.style.display = 'block';

    const loadingScreen4 = document.querySelector('.orderManage');
    loadingScreen4.style.display = 'none';
    const loadingScreen5 = document.querySelector('.orderDetailsPage');
    loadingScreen5.style.display ='none';

}

const clear1 = () => {
    const loadingScreen = document.querySelector('#sahan');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('.customerManage');
    loadingScreen1.style.display = 'block';

    const loadingScreen2 = document.querySelector('.itemManage');
    loadingScreen2.style.display = 'none';
    const loadingScreen3 = document.querySelector('.header');
    loadingScreen3.style.display = 'block';

    const loadingScreen4 = document.querySelector('.orderManage');
    loadingScreen4.style.display = 'none';
    const loadingScreen5 = document.querySelector('.orderDetailsPage');
    loadingScreen5.style.display ='none';
}

const clear2 = () => {
    const loadingScreen = document.querySelector('#sahan');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('.customerManage');
    loadingScreen1.style.display = 'none';

    const loadingScreen2 = document.querySelector('.itemManage');
    loadingScreen2.style.display = 'block';
    const loadingScreen3 = document.querySelector('.header');
    loadingScreen3.style.display = 'block';

    const loadingScreen4 = document.querySelector('.orderManage');
    loadingScreen4.style.display = 'none';
    const loadingScreen5 = document.querySelector('.orderDetailsPage');
    loadingScreen5.style.display ='none';
}

const clear3 = () => {
    const loadingScreen = document.querySelector('#sahan');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('.customerManage');
    loadingScreen1.style.display = 'none';

    const loadingScreen2 = document.querySelector('.itemManage');
    loadingScreen2.style.display = 'none';

    const loadingScreen3 = document.querySelector('.header');
    loadingScreen3.style.display = 'block';

    const loadingScreen4 = document.querySelector('.orderManage');
    loadingScreen4.style.display = 'block';
    const loadingScreen5 = document.querySelector('.orderDetailsPage');
    loadingScreen5.style.display ='none';
}

const clear4 = function () {
    const loadingScreen = document.querySelector('#sahan');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('.customerManage');
    loadingScreen1.style.display = 'none';

    const loadingScreen2 = document.querySelector('.itemManage');
    loadingScreen2.style.display = 'none';

    const loadingScreen3 = document.querySelector('.header');
    loadingScreen3.style.display = 'block';

    const loadingScreen4 = document.querySelector('.orderManage');
    loadingScreen4.style.display = 'none';

    const loadingScreen5 = document.querySelector('.orderDetailsPage');
    loadingScreen5.style.display ='block';
}

function blurring() {
    load++
    const loadingScreen = document.querySelector('#sahan');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('.customerManage');
    loadingScreen1.style.display = 'none';

    const loadingScreen2 = document.querySelector('.itemManage');
    loadingScreen2.style.display = 'none';
    const loadingScreen3 = document.querySelector('.header');
    loadingScreen3.style.display = 'none';
    const loadingScreen4 = document.querySelector('.orderManage');
    loadingScreen4.style.display = 'none';
    const loadingScreen5 = document.querySelector('.orderDetailsPage');
    loadingScreen5.style.display ='none';
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

$('#navbar-nav>a').eq(0).on('click', function (){
    clear();

    $('#navbar-nav>a').eq(0).css("color", "#435334" );
    $('#navbar-nav>a').eq(1).css("color", "#94A686" );
    $('#navbar-nav>a').eq(2).css("color", "#94A686" );
    $('#navbar-nav>a').eq(3).css("color", "#94A686" );
})

$('#navbar-nav>a').eq(1).on('click', function (){
    clear1();
    $('#navbar-nav>a').eq(1).css("color", "#435334" );
    $('#navbar-nav>a').eq(0).css("color", "#94A686" );
    $('#navbar-nav>a').eq(2).css("color", "#94A686" );
    $('#navbar-nav>a').eq(3).css("color", "#94A686" );
})

$('#navbar-nav>a').eq(2).on('click', function (){
    clear2();
    $('#navbar-nav>a').eq(1).css("color", "#94A686" );
    $('#navbar-nav>a').eq(0).css("color", "#94A686" );
    $('#navbar-nav>a').eq(2).css("color", "#435334" );
    $('#navbar-nav>a').eq(3).css("color", "#94A686" );
})

$('#navbar-nav>a').eq(3).on('click', function (){
    clear3();
    $('#navbar-nav>a').eq(1).css("color", "#94A686" );
    $('#navbar-nav>a').eq(0).css("color", "#94A686" );
    $('#navbar-nav>a').eq(2).css("color", "#94A686" );
    $('#navbar-nav>a').eq(3).css("color", "#435334" );
})

$('#sahan>section>.home_pag_paragraph>#orderDetailsBtn').on('click', function (){
    clear4();
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
//preloader
