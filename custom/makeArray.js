function makeArray(count, content) {
   var result = [];
   if(typeof content == "function") {
      for(var i = 0; i < count; i++) {
         result.push(content(i));
      }
   } else {
      for(var i = 0; i < count; i++) {
         result.push(content);
      }
   }
   return result;
   
}
