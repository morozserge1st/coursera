/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    //Создаем новый массив для тегов
    var result = [];
    //Создаем точку возврата
    nextInput:
    //Создаем переменую для каждого элемента в нижнем регистре
      for (var i = 0; i < hashtags.length; i++) {
        var str = hashtags[i].toLowerCase();
        //Проверяем в нижнем регистре была ли переменная
        for (var j = 0; j < result.length; j++) { 
          if (result[j].toLowerCase() == str) continue nextInput; 
        }
        //Если не было добавляем в массив
        result.push(str);
      }
      //Объединияем масив в строчку и возвращаем ее
  var tag = result.join(', ')
    return tag;

};
