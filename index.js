const moon = document.getElementById('moon');
const mountains = document.getElementById('mountains');
const sky = document.getElementById('sky');
const road = document.getElementById('road');
const midnight = document.getElementById('midnight');


document.addEventListener('scroll', () => {
    let { scrollY } = window;
    road.style.top = 0.5 * scrollY + 'px';
    mountains.style.top = (150 + 0.05 * scrollY) + 'px';
    moon.style.left = 1.1 * scrollY + 'px';
    sky.style.top = -1.2 * scrollY + 'px';
    midnight.style.top = (120 + -1.5 * scrollY) + 'px';
})
