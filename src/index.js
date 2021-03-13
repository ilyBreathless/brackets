module.exports = function check(str, bracketsConfig) {
    let  arrStr = str.split('')
    for (let i = 0; i<arrStr.length; i++)
    {
        for (let j = 0; j < bracketsConfig.length; j++)
        {
            if (arrStr[i] == bracketsConfig[j][1] && arrStr[i-1] == bracketsConfig[j][0])
            {
                arrStr.splice(i - 1, 2)
                i = 0
                break
            }
        }
    }
        if (arrStr<1) {
            return true
        }
        else
        {
            return false
        }
}
