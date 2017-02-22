// default incase thelist doesn't load
theList = [
  "official_hitomitanaka",
  "anri_okita"
];

window.onload = function(){
  document.addEventListener('scroll', function(){
    console.log(theList);
  });
};
