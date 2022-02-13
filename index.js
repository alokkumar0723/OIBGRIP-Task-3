var i=-1;
var arrContent=[],arrncontent=[];
function additem(){
    var value=document.getElementById("additem").value;
    if(value!=''){
        i++;
        var table=document.getElementById("table");
        arrContent.push(value+"<button onclick=\"del("+i+")\"><img src=\"https://vignette3.wikia.nocookie.net/mkwikia/images/a/ab/Ps3_button_x_by_thedevingreat-d5g6c9k.png/revision/latest?cb=20150506023724\" height=\"20px\" width=\"20px\"></button>");
        arrncontent.push(value+"<button onclick=\"del("+i+")\"><img src=\"https://vignette3.wikia.nocookie.net/mkwikia/images/a/ab/Ps3_button_x_by_thedevingreat-d5g6c9k.png/revision/latest?cb=20150506023724\" height=\"20px\" width=\"20px\"></button>");
        disp();
    }
}//add item
function disp(){
    table.innerHTML="";
    for(var c=0;c<arrContent.length;c++){
        if(arrContent[c]!=undefined)
        table.innerHTML+=arrContent[c]+"<br>";
    }
}//display the contents of the to-do list
function del(contentn){
    if(arrContent[contentn]===arrncontent[contentn])
    arrContent[contentn]="<s>"+arrContent[contentn]+"</s>";
    else
    arrContent[contentn]=arrncontent[contentn];
    disp();
}//del content which has been done
function clearall(){
    arrContent=[];
    arrncontent=[];
    i=-1;
    disp();
}