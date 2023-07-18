import _ from 'lodash'

const navBtn = document.querySelector('.nav-toggle');
const sideBar = document.querySelector('.sidebar');
const sideBarClose = document.querySelector('.sidebar .close-btn');
const videoContainer = document.querySelector('.video-container');
const switchBtn = document.querySelector('.switch-btn');
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-overlay .close-btn');

modalBtn.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal');
});
modalClose.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
})

navBtn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sidebar');
});
sideBarClose.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
});

switchBtn.addEventListener('click', function(){
    if(this.classList.contains('slide')){
        this.classList.remove('slide');
        videoContainer.play();
    }else{
        this.classList.add('slide');
        videoContainer.pause();
    }
});
