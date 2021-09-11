const liClick = () => {
    const commercialLi = document.getElementById('commercial');
    const radioLi = document.getElementById('radio');
    const commercialLinks = document.querySelector('#commercial ul');
    const radioLinks = document.querySelector('#radio ul');
    const nav = document.querySelector('nav');

    radioLi.addEventListener('click', () => {
        if (commercialLinks.classList.contains('show')) {
            commercialLinks.classList.remove('show');
            nav.classList.remove('grid-gap')
        }
        radioLinks.classList.toggle('show');
        nav.classList.toggle('grid-gap')
    })

    commercialLi.addEventListener('click', () => {
        if (radioLinks.classList.contains('show')) {
            radioLinks.classList.remove('show');
            nav.classList.remove('grid-gap')
        }
        commercialLinks.classList.toggle('show');
        nav.classList.toggle('grid-gap')
    })
}

const creditClicked = () => {
    const credits = document.querySelectorAll('table tr td button');
    const songNames = document.querySelectorAll('.song-name')
    const creditContainer = document.querySelector('.credit-container');

    songNames.forEach(songName => {
        const text = songName.textContent;
        const textarea = document.querySelector('.credit-container textarea');
        textarea.innerText = `Music provided by Monstercat:
        Conro & Nevve - ${text}
        https://youtube.com/monstercat 
        https://youtube.com/monstercatinstinct`;
    });
    credits.forEach(credit => {
        credit.addEventListener('click', () => {
            creditContainer.classList.add('show-credit-container');
            const close = document.querySelector('.credit-container i');
            close.addEventListener('click', () => {
                creditContainer.classList.remove('show-credit-container');
            })
        })
    })
}

const playerOnScroll = () => {
    const musicPlayer = document.querySelector('.music-player');
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > nav.clientHeight) {
            musicPlayer.classList.add('on-scroll-player');
        } else {
            musicPlayer.classList.remove('on-scroll-player');
        }
    })
}

const playlist = () => {
    const audios = document.querySelectorAll('audio');
    const playButtons = document.querySelectorAll('table tr td i');
    const leftPlayButton = document.getElementById('play-button');
    const playerPlayButton = document.querySelector('.music-player .play i');
    const nextButton = document.querySelector('.music-player .next i');
    const prevButton = document.querySelector('.music-player .previous i');
    const repeatButton = document.querySelector('.music-player .repeat i');
    const randomButton = document.querySelector('.music-player .shuffle i');
    const soundButton = document.querySelector('.music-player .sound i');
    const progress = document.querySelector('.music-player .sound i progress');
    let index=0;

    playButtons.forEach((button,i) => {
        button.addEventListener('click', () =>{
            index=i;
            console.log(index)
            if(audios[i].paused){
                audios.forEach((audio,i) =>{
                    audio.pause()
                    playerPlayButton.classList.remove('fa-play');
                    playerPlayButton.classList.add('fa-pause');
                    playButtons[i].classList.add('fa-play-circle');
                    playButtons[i].classList.remove('fa-pause-circle');
                })
                audios[i].play();
                button.classList.remove('fa-play-circle')
                button.classList.add('fa-pause-circle')
            } else{
                playerPlayButton.classList.add('fa-play');
                playerPlayButton.classList.remove('fa-pause');
                audios[i].pause()
                button.classList.add('fa-play-circle')
                button.classList.remove('fa-pause-circle')
            }
        })
    });

    leftPlayButton.addEventListener('click', ()=>{
        console.log(index);
        if(audios[index].paused){
            audios[index].play();
            playerPlayButton.classList.remove('fa-play');
            playerPlayButton.classList.add('fa-pause');
            playButtons[index].classList.remove('fa-play-circle');
            playButtons[index].classList.add('fa-pause-circle');
        } else{
            audios[index].pause();
            playerPlayButton.classList.add('fa-play');
            playerPlayButton.classList.remove('fa-pause');
            playButtons[index].classList.add('fa-play-circle');
            playButtons[index].classList.remove('fa-pause-circle');
        }
    })

    playerPlayButton.addEventListener('click', ()=>{
        console.log(index);
        if(audios[index].paused){
            audios[index].play();
            playerPlayButton.classList.remove('fa-play');
            playerPlayButton.classList.add('fa-pause');
            playButtons[index].classList.remove('fa-play-circle');
            playButtons[index].classList.add('fa-pause-circle');
        } else{
            audios[index].pause();
            playerPlayButton.classList.add('fa-play');
            playerPlayButton.classList.remove('fa-pause');
            playButtons[index].classList.add('fa-play-circle');
            playButtons[index].classList.remove('fa-pause-circle');
        }
    })

    nextButton.addEventListener('click', () =>{
        let idk=index;
        if(idk>10){
            idk=0;
            index=idk;
            console.log(idk)
            audios.forEach(audio =>{
                audio.pause();
                playButtons.forEach(button =>{
                    button.classList.remove('fa-pause-circle');
                    button.classList.add('fa-play-circle')
                })
                audios[idk].play();
                playerPlayButton.classList.remove('fa-play');
                playerPlayButton.classList.add('fa-pause');
                playButtons[index].classList.remove('fa-play-circle');
                playButtons[index].classList.add('fa-pause-circle');
            })
        } else{
        idk++;
        index=idk;
        console.log(idk);
        audios.forEach(audio =>{
            audio.pause();
            playButtons.forEach(button =>{
                button.classList.remove('fa-pause-circle');
                button.classList.add('fa-play-circle')
            })
            audios[idk].play();
            playerPlayButton.classList.remove('fa-play');
            playerPlayButton.classList.add('fa-pause');
            playButtons[index].classList.remove('fa-play-circle');
            playButtons[index].classList.add('fa-pause-circle');
        })
        }
    })

    prevButton.addEventListener('click', () =>{
        let idk=index;
        if(idk<1){
            idk=11;
            index=idk;
            console.log(idk)
            audios.forEach(audio =>{
                audio.pause();
                playButtons.forEach(button =>{
                    button.classList.remove('fa-pause-circle');
                    button.classList.add('fa-play-circle')
                })
                audios[idk].play();
                playerPlayButton.classList.remove('fa-play');
                playerPlayButton.classList.add('fa-pause');
                playButtons[index].classList.remove('fa-play-circle');
                playButtons[index].classList.add('fa-pause-circle');
            })
        } else{
        idk--;
        index=idk;
        console.log(idk);
        audios.forEach(audio =>{
            audio.pause();
            playButtons.forEach(button =>{
                button.classList.remove('fa-pause-circle');
                button.classList.add('fa-play-circle')
            })
            audios[idk].play();
            playerPlayButton.classList.remove('fa-play');
            playerPlayButton.classList.add('fa-pause');
            playButtons[index].classList.remove('fa-play-circle');
            playButtons[index].classList.add('fa-pause-circle');
        })
        }
    })

    repeatButton.addEventListener('click', ()=>{
        console.log(index);
        audios[index].currentTime=0;
    })

    randomButton.addEventListener('click', () =>{
        index = Math.floor(Math.random()*12);
        console.log(index)
        audios.forEach(audio =>{
            audio.pause();
            audios[index].play();
            playButtons.forEach(button =>{
                button.classList.remove('fa-pause-circle');
                button.classList.add('fa-play-circle')
            })
            playerPlayButton.classList.remove('fa-play');
            playerPlayButton.classList.add('fa-pause');
            playButtons[index].classList.remove('fa-play-circle');
            playButtons[index].classList.add('fa-pause-circle');
        })
    })

    soundButton.addEventListener('click', ()=>{
        progress.classList.toggle('show-progress');
    })

    progress.addEventListener('click', e=>{
        progress.max=100;
        var x = e.offsetX; // or e.offsetX (less support, though)
        audios[index].volume=x/100;
        progress.value=x;
    })
}



const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show-nav')
        console.log(nav.classList)
    })
}

navSlide();
playerOnScroll();
creditClicked();
liClick();
playlist();


/*     const playButton = document.getElementById('play-button');
    const anotherPlayButton = document.querySelector('.music-player .play');
    const audio = document.querySelector('audio');
    const iAnotherPlayButton = document.querySelector('.music-player .play i');
    let xd = false;
    playButton.addEventListener('click', ()=>{
        if(xd=== false){
            audio.play();
            xd=!xd;
            iAnotherPlayButton.classList.remove('fa-play');
            iAnotherPlayButton.classList.add('fa-pause');
        } else {
            audio.pause();
            xd=!xd;
            iAnotherPlayButton.classList.add('fa-play');
            iAnotherPlayButton.classList.remove('fa-pause');
        }

    })

    anotherPlayButton.addEventListener('click', ()=>{
        if(xd=== false){
            audio.play();
            xd=!xd;
            iAnotherPlayButton.classList.remove('fa-play');
            iAnotherPlayButton.classList.add('fa-pause');
        } else {
            audio.pause();
            xd=!xd;
            iAnotherPlayButton.classList.add('fa-play');
            iAnotherPlayButton.classList.remove('fa-pause');
        }

    }) */