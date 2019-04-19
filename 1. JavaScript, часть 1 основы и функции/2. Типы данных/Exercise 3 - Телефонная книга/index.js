// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandType = command.split(' ')[0];

    switch (commandType) {    
        case 'ADD':
        return addNew();
        
        case 'REMOVE_PHONE':
        return removeSome();
        
        case 'SHOW':
        return showAll();                 
         
      }
  
    
    function addNew() {
        var name = command.split(' ')[1]; 
        var phones = command.split(' ')[2].split(','); 
        if (phoneBook.hasOwnProperty(name)) {
          phoneBook[name] = phoneBook[name].concat(phones);
         
        } else {
          phoneBook[name] = phones;
             
        }
    }
  
    function removeSome() {
      var phones = command.split(' ')[1];    
      for (var key in phoneBook) {      
        var phonesPos = phoneBook[key].indexOf(phones); 
        if (phonesPos != -1) {
          phoneBook[key].splice(phonesPos, 1);
          if (phoneBook[key].length == 0) {
            delete phoneBook[key];
          }
          return true;
          }  
        }
        
        return false;
      }      
    
  
    function showAll() {
      var book = [];
      for (var name in phoneBook) {
        book.push(name + ': ' + phoneBook[name].join(', '));
      }
      book.sort();
      
      return book;
    }
  
    
  };