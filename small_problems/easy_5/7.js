function swapName(name) {
  let nameArr = name.split(' ');
  return `${nameArr.slice(1)}, ${nameArr.slice(0, 1)}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe")