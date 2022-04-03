const isEqualArrayWithoutOrder = <T>(a:T[], b:T[]): boolean => {
    const removeIndex = <T>(index: number, array: T[]) => 
      array.filter((_, i) => i !== index);
    

    const [remainA, remainB] = a.reduce<[T[], T[]]>(
      ([accA, accB], xa) => {
      const indexB = accB.indexOf(xa);
      if(indexB === -1){
        return [[...accA, xa],[accB]];
      }

      return [accA, removeIndex(indexB, accB)];
    },
    [[], b]
    );

    return remainA.length === 0 && remainB.length === 0;
}

console.log(isEqualArrayWithoutOrder<number>([1,2,3],[2,3,1]));