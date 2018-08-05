
const rest = (a, b) => (a % b);

const isLeapYear = year => {
    const restFour = rest(year, 4);
    const restHundred = rest(year, 100);
    const restFourHundred = rest(year, 400);

    if ((!restFour) &&
        (restHundred || !restHundred && !restFourHundred)) {
        return true;
    }
    return false;
}

const year = 2022;
isLeapYear(year);