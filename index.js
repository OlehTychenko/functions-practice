// task 1 IIFE

(function () {
    const NUMB = prompt('Input your number');
    console.log(NUMB * NUMB);
})();

// task 2 Function declaration

let A = +prompt('First number');
let B = +prompt('Second number');
let C = +prompt('Third number');

calcSumDev(A, B, C);

function calcSumDev(a, b, c) {
    const RES = (a + b) / c;
    console.log(RES);

    return RES;
};

// task 3 Function expression

const DAY_NUMB = +prompt('Input day number of the week');

let getDay = function (num) {
    let res = '';
    switch (num) {
        case 1: res = 'Monday';
            break;
        case 2: res = 'Tuesday';
            break;
        case 3: res = 'Wednesday';
            break;
        case 4: res = 'Thursday';
            break;
        case 5: res = 'Friday';
            break;
        case 6: res = 'Saturday';
            break;
        case 7: res = 'Sunday';
            break;
        default: res = `${num} is not a number from 1 to 7`;
    };
    console.log(res);

    return res;
};

getDay(DAY_NUMB);

// task 4 Resursion

const FACT_NUM = +prompt('Input factorial number');

const CALC_FACT = function (num) {
    if (num === 1) return 1;

    return num * CALC_FACT(num - 1);
};

console.log(CALC_FACT(FACT_NUM));

// task 5 Arrow

const CALC_SECONDS = () => {
    const HOURS_IN_SEC = prompt('Hours') * 60 * 60;
    const MINUTES_IN_SEC = prompt('Minutes') * 60;
    const SECONDS = +prompt('Seconds');
    const RES = (HOURS_IN_SEC + MINUTES_IN_SEC + SECONDS);
    console.log(RES);

    return RES;
};

CALC_SECONDS();

// task 6 Arrow

const USER_SEC = prompt('Input seconds')

const CALC_DATE = (secs) => {
    if (secs > 24 * 60 * 60) return console.log('More than one day');

    const HOURS = Math.trunc(secs / 60 / 60);
    secs = secs - HOURS * 60 * 60;
    const MINUTES = Math.trunc(secs / 60);
    secs = secs - MINUTES * 60;
    const SHOW_HOURS = HOURS < 10 ? `0${HOURS}` : HOURS;
    const SHOW_MINUTES = MINUTES < 10 ? `0${MINUTES}` : MINUTES;
    console.log(`${SHOW_HOURS}:${SHOW_MINUTES}:${secs}`);
};

CALC_DATE(USER_SEC);

// task 7

// 1.Do not have this.
// 2.Different return
// 3.Can't be called with new
// 4.Syntax