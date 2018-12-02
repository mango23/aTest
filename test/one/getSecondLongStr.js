// 功能是求出字符串 s 与字符串 t 的第⼆⻓公共单词(这⾥，假设两个字符串均由英⽂字⺟和
// 空格字符组成)；若找到这样的公共单词，函数返回该单词，否则，函数返回NULL，如果
// 有多个满⾜要求，则返回第⼀个单词。
// 例如：若 s=“This is C programming text”，t=“This is a text for C programming”，则函数
// 返回“this”。
//
let s = 'This is C programming text'
let t = 'This is a text for C programming'

function getStr(s, t) {
    let sarr = s.split(' ')
    let tarr = t.split(' ')
    let sobj = {}
    let tobj = {}
    let commonstr = []
    sarr.map((a, b) => {
        sobj[a] = a.length
    })
    tarr.map((m, n) => {
        tobj[m] = m.length
        let cstr = {}
        cstr['word'] = m
        cstr['count'] = m.length
        if (sobj[m]) {
            commonstr.push(cstr)
        }
    })

    commonstr.sort((a, b) => { return a.count - b.count < 0 })
    commonstr = commonstr.filter((x) => {
        return x.count < commonstr[0].count
    })
    return commonstr[0].word

}
console.log(getStr(s, t))