
function getLength(pathId) {
  var path = document.getElementById(pathId);
  return path.getTotalLength();
}

document.documentElement.style.setProperty('--path1-length', getLength('path1'));
document.documentElement.style.setProperty('--path2-length', getLength('path2'));
document.documentElement.style.setProperty('--path3-length', getLength('path3'));
document.documentElement.style.setProperty('--path4-length', getLength('path4'));
document.documentElement.style.setProperty('--path5-length', getLength('path5'));
document.documentElement.style.setProperty('--path6-length', getLength('path6'));
document.documentElement.style.setProperty('--path7-length', getLength('path7'));
document.documentElement.style.setProperty('--path8-length', getLength('path8'));
