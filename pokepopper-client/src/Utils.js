export const animals = [
    {
        id: 0,
        url: '../assets/090Shellder.png',
        pt: 20
    },
    {
        id: 1,
        url: '../assets/117Seadra.png',
        pt: 25
    },
    {
        id: 2,
        url: '../assets/101Electrode.png',
        pt: -500
    },
    {
        id: 3,
        url: '../assets/223Remoraid.png',
        pt: 15
    },
    {
        id: 4,
        url: '../assets/224Octillery.png',
        pt: 50
    },
    {
        id: 5,
        url: '../assets/370Luvdisc.png',
        pt: 40
    },
    {
        id: 6,
        url: '../assets/457Lumineon.png',
        pt: 20
    },
    {
        id: 7,
        url: '../assets/767Wimpod.png',
        pt: 25
    },
    {
        id: 8,
        url: '../assets/129Magikarp.png',
        pt: 1
    }
]

export function random(min,max){
    return Math.round(Math.random() * (max-min) + min);
}


export function playSound(e) {
    const audio = document.getElementById(`eff`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}


function makeLevels(n) {
    let array = [];
    let timer = 60;
    let score = 250;

    for (let i = 0 ; i <= n ; i++ ){
        array.push({
            lvl: i,
            timer: timer,
            score: score
        })
        score+= i*100
        timer-= 5
    }

    return array
}

export const levelReq = makeLevels(50);

export function updateScore(currentScore, totalScore) {
    const scoreH1 = document.getElementById('score');
    const totalScoreH1 = document.getElementById('totalscore');

    setTimeout( () => {
        scoreH1.innerHTML = `Current Score: ${currentScore}`;
        totalScoreH1.innerHTML = `Total Score: ${totalScore+currentScore}`;
    }, 150)

}