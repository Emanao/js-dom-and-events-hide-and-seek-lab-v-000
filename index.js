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
  const i = 0;
  let kids = gn[i].children
  let deepestKid = kids[i]
  do{
    if(kids.length === 0){
      break;
    }
    deepestKid = kids[i];
    kids = kids[i].children;
  }while(kids.length>0);
  return deepestKid;
}
