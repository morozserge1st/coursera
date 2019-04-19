/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var time = new Date(date);
    return {
        add: function (num, dataString) {
          //проверка
            if (num < 0) {
                throw new TypeError();}
            var possibleTypes = ['years','months','days','hours','minutes'];
            if (!possibleTypes.includes(dataString)) {
                throw new TypeError();
            }
            
            if (dataString === 'years') {
                time.setFullYear(time.getFullYear() + num);
            } 
            if (dataString === "months") {
                time.setMonth(time.getMonth() + num);
            }
             if (dataString === "days") {
                time.setDate(time.getDate() + num);
            } 
            if (dataString === 'hours') {
               time.setHours(time.getHours() + num);
            } 
            if (dataString === "minutes") {
                time.setMinutes(time.getMinutes() + num);
            } 
                    
            return this;
        },
        subtract: function (num, dataString) {
            if (num < 0) {
                throw new TypeError();}
            var possibleTypes = ['years','months','days','hours','minutes'];
            if (!possibleTypes.includes(dataString)) {
                throw new TypeError();
            }

            if (dataString === "years") {
                time.setFullYear(time.getFullYear() - num);
            }
            if (dataString === "months") {
                time.setMonth(time.getMonth() - num);
            }
            if (dataString === "days") {
                time.setDate(time.getDate() - num);
            } 
            if (dataString === "hours") {
                if (num === 24) {time.setDate(time.getDate() - 1);}
                else {time.setHours(time.getHours() - num)}
            } 
            if (dataString === "minutes") {
                time.setMinutes(time.getMinutes() - num);
            } 
            return this;
        },

        get value() {
            //2017-04-20 14:00
            var d = time,
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = '' + d.getFullYear(),
                hour = '' + d.getHours(),
                minute = '' + d.getMinutes();

                if (month == 0) {
                    month = "00";   
                }    
                else if (month>0 && month<10) {
                    month = "0" + month;
                }
                
                if (day == 0) {
                    day = "00";   
                }    
                else if (day>0 && day<10) {
                    day = "0" + day;
                }

                if (hour == 0) {
                    hour = "00";   
                }    
                else if (hour>0 && hour<10) {
                    hour = "0" + hour;
                }

                if (minute == 0) {
                    minute = "00";   
                }    
                else if (minute>0 && minute<10) {
                    minute = "0" + minute;
                }


            var fullyear = [year, month, day].join('-');
            var fulltime = [hour, minute].join(':');
            return fullyear + " " + fulltime;

        },
    };
};