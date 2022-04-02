const isEqualArrayWithoutOrder = (a1: string, a2: string) => {
  if (a1.length !== a2.length) return false;

  const length = a1.map((e) => {
    console.log(`cur ${e}`);
    const num = a2.indexOf(e);
    console.log(`num ${num}`);
    if (num !== -1) {
      return e;
    }
  });

  console.log(`length ${length}`);

  return length.length === a1.length;
};

console.log(`isEqualArrayWithoutOrder ${isEqualArrayWithoutOrder([0,0,0],[0,1,2])}`);
