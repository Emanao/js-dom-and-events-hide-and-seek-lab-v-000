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
  const nodeIndex = 0;
  let deepestKid = gn[nodeIndex];
  let kids = gn[nodeIndex].children;

  do{
    if(kids.length === 0){
      break;
    }
    deepestKid = kids[nodeIndex];
    kids = kids[nodeIndex].children;
  }while(kids.length>0);
  return deepestKid;
}
