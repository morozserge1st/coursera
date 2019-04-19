/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  //minutes
    if ((minutes + interval)< 60){
    var m = minutes + interval; 
}
else {
    var m = (minutes + interval)%60;
}
//hours

if (hours + Math.floor((minutes+interval)/60) < 24){
    var h = hours + Math.floor((minutes+interval)/ 60); 
}
else {  
    var h = hours + Math.floor((minutes+interval)/ 60) - 24;   
}
while (h>=24){
    h=h-24
}
//check
if (m == 0) {
    m = "00";   
}    
else if (m>0 && m<10) {
    m = "0" + m;
}

if (h == 0) {
    h = "00";   
}    
else if (h>0 && h<10) {
    h = "0" + h;
}
    return h + ":" + m; 

}
    