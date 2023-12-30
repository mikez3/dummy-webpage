function myFunction(btn_id) {

  let btnText = document.getElementById(btn_id.id);
  let parentElem = btn_id.parentElement;
  let childElemP = parentElem.childNodes;
  let spanElem = childElemP[1].childNodes;

  if (spanElem[1].style.display === "none") {
    spanElem[1].style.display = "inline";
    btnText.innerHTML = "Read more";
    spanElem[2].style.display = "none";
  } else {
    spanElem[1].style.display = "none";
    btnText.innerHTML = "Read less";
    spanElem[2].style.display = "inline";
  }
}
function testFunction(){
  let item = document.querySelectorAll(".cpu:checked, .gpu:checked, .ram:checked, .drive:checked, .motherboard:checked, .psu:checked, .cooling:checked, .case:checked" );
  var i, sum=+0;
  if(item.length==0){
    return console.log("Nothing has been selected!");
  }
  else{
    for(i=0;i<item.length;i++){
      if(item[i]!=null){
        sum=sum + parseFloat(item[i].value);
      }
    }
    document.getElementById("txtresult").value = sum.toFixed(2) + "€";
    
    return console.log(sum);
  }
 }
