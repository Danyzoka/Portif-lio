const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');

let index = 0;

nextBtn.addEventListener('click', () => {
    let nextIndex = (index < 3) ? index + 1 : 3;
    bgs[index].classList.remove('active');
    bgs[nextIndex].classList.add('active');
    listInfo.style.transform = `translateY(${nextIndex * -25}%)`;
    listImg.style.transform = `translateY(${nextIndex * -100}%)`;
    index = nextIndex;
});

prevBtn.addEventListener('click', () => {
    let prevIndex = (index > 0) ? index - 1 : 0;
    bgs[index].classList.remove('active');
    bgs[prevIndex].classList.add('active');
    listInfo.style.transform = `translateY(${prevIndex * -25}%)`;
    listImg.style.transform = `translateY(${prevIndex * -100}%)`;
    index = prevIndex;
});
