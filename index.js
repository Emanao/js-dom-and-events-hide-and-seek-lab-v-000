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
