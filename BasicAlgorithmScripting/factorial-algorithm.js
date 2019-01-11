function factorialize(num) {
  if (num === 1 | num === 0) {
    return 1;
  }
  else {
    for (var i = 1; i <= num; i++) {
      num *= i;
    }
  }
  return num;
  console.log(num);
}

factorialize(5);