/* eslint-disable no-undef */
/* eslint-disable no-cond-assign */
function sumOfNumbersNM(N = '', M = '') {
    let [n, m] = [N, M].map(Number)
    return new Array((len = m - n + 1) > 0 ? len : 0)
        .fill()
        .map(() => n++)
        .reduce((a, b) => a + b, 0)
}
