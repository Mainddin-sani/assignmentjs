// FeettoMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
   
}
var resultMile = feetToMile(5280);
console.log(resultMile);

// woodcalculator

function woodcalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var TotalResult = woodcalculator(5, 6, 5);
console.log(TotalResult);

//brickCalculator

function brickCalculator(level){
    height = 0;
    if(level > 20){
        height +=  ((level - 20)*10);
        level =  20;
    }
    if(level > 10){
        height +=  ((level - 10)*12);
        level = 10;
    }
    height += (level * 15);
    var totalbrick = height * 1000;
    return totalbrick;
}
var totalbrick = brickCalculator(5);
console.log(totalbrick);

//tinyFriend

function tinyFriend(name){
    var smallest = name[0];
    for(var i = 0; name[i];i++){
        if(smallest.length >= name[i].length){
            smallest = name[i];
        }
}
    return smallest;
    
}
var totalName = tinyFriend (['sani','mainuddin']);
console.log(totalName);

