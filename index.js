function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector("div#nested div.target");
}
function increaseRankBy(n){
  const rl = document.querySelectorAll("ul.ranked-list li")
  for(let i=0; i<rl.length; ++i){
    rl[i].innerHTML = parseInt(rl[i].innerHTML, 10) + n ;
  }
}
function deepestChild(){
  const gn = document.querySelectorAll("div#grand-node");
  let i = 0;
  let kids = gn[0].children
  do{
    if(kids.length === 0){
      break;
    }
    kids = kids[i].children;
    ++i;
  }while(kids.length>0);
}
