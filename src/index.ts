const isEqualArrayWithoutOrder = (s1: string, s2: string) => {
  const arrS1 = s1.split("");
  const arrS2 = s2.split("");

  if (arrS1.length !== arrS2.length) return false;

  const comparedArray = [...arrS2];

  for (let i in arrS1) {
    const num = comparedArray.indexOf(arrS1[i]);
    if (num !== -1) {
      comparedArray.splice(num, 1);
    }
  }

  return comparedArray.length === 0;
};

console.log(isEqualArrayWithoutOrder("123", "112"));
