/* Getting our key elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const playerControls = player.querySelector('.player__controls');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// const fullScreen = playerControls.querySelectorAll('.fullscreen')[0];


/* Building the different functions */

function togglePlay() {

    // this:
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    // is the same as saying this:
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }

    console.log("Toggled play");

    console.clear();

}

function updateButton() {

    const icon = this.paused ? '▶' : '❚❚';
    toggle.textContent = icon;

    console.log(icon);
    console.log("Updated the button");

    console.clear();

}

function skip() {

    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)

    console.log(`Skipped ${this.dataset.skip} seconds of the video`);

    console.clear();

}

function handleRangeUpdate() {

    video[this.name] = this.value;
    console.log(this.name)
    console.log(this.value);

    console.log("Handled range update")

    console.clear();

}

function handleProgress() {

    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;

    console.log(`${percent}%`);

    console.log("Handled progress bar update");

    console.clear();

}

function scrub(e) {

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(`${scrubTime}%`);

    // console.log(`Updated progress bar ${c % "on click", "font-style:italic"}`)
    console.log("Updated progress bar on click")

    console.clear();
}

// let maximized = false;
// let height;

// function toggleFullScreen() {

//     if (maximized === false) {

//         this.style.width = '100vw';

//         height = this.style.height;
//         height += ;

//     } else {
//         video.pause();
//     }

//     console.log("Toggled full screen");

//     console.clear();

// }

// function updateFullScreenButton() {

//     const icon = maximized ? '⛶' : '┤├';
//     this.textContent = icon;

//     maximized = !maximized;

//     console.log(icon);
//     console.log("Updated the button");

//     console.clear();

// }

/* Hooking up the event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// maybe??
// video.addEventListener('progress', handleProgress);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', scrub)


// fullScreen.addEventListener('click', togglePlay);
// fullScreen.addEventListener('click', updateButton);