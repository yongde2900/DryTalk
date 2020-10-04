// /dryTalker.js
// Define sample function
function sample (arr) {
    let picked = Math.floor(Math.random() * arr.length )
    return arr[picked]
}

// Define dryTalker function
function dryTalker (target) {
// Define task and phrase
const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  
}
const phrase = ['很簡單','很容易','很快','很正常']
let options = {
    engineer: '',
    designer: '',
    entrepreneur: '',
    statement: ''
}
// If target is null return error
if(!target){
    options.statement = '請選擇對象'
    return options
}
// Judge target and choose task
switch (target) {
    case 'engineer' :
        options.statement = '工程師' + sample (task.engineer)
        options.engineer = 'on'
        break
    case 'designer' :
        options.statement = '設計師' + sample (task.designer)
        options.designer ='on'
        break
    case 'entrepreneur' :
        options.statement = '創業家' + sample (task.entrepreneur)
        options.entrepreneur ='on'
        break 
}

// Choose a phrase
options.statement += sample(phrase)

// Return dryTALK
return options
}

// Export dryTalker function for other files to use
module.exports = dryTalker