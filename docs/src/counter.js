
function count1(stringArray){
  let map = new Map();
  for(str of stringArray){
    let count =  map.get(str)

    if(!count){
      count = 1;
    }else{
      count +=1;
    }
    map.set(str,count);
  }
  let rtnStr = "";
  map.forEach(function(value,key){
    rtnStr += key + "\t" + value + "\n";
  });
  return rtnStr;
}
