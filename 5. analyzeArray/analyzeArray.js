const analyzeArray = function (arr) {

    const len  = arr.length
    let minNum = Math.min(...arr)
    let maxNum = Math.max(...arr)
    const avNum = arr.reduce((initial, current) => {
        return initial += current
    })
    
    const obj = {
        average: Math.floor(avNum / arr.length),
        min: minNum,
        max: maxNum,
        length: len
    }

    return obj
}

module.exports = analyzeArray