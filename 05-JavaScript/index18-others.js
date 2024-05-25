{
  // reverse a string in js/ts
  let str = "abc";
  let reversedStr = str.split('').reverse().join('');
  console.log(reversedStr); // cba
  console.log();
}

{
  // traverse a string, without indexing of string
  let str = "abc";
  for (let c of str) {
    console.log(c); // a b c
  }
  console.log();
}
