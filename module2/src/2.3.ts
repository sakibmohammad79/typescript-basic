{
  //learn generic type
  // type genericArray = Array<number>
  type genericArray<T> = Array<T>;

  // const rollNumber: number[] = [1,2,3,4,5];
  const rollNumber: genericArray<number> = [1, 2, 3, 4, 5];

  // const mentors: string[] = ['sakib', 'sohan', 'anupam'];
  const mentors: genericArray<string> = ["sakib", "sohan", "anupam"];

  // const arrayBool: boolean[] = [true, false, true];
  const arrayBool: genericArray<boolean> = [true, false, true];

  //object
  type GenericType<T> = Array<T>;
  const person: GenericType<{ name: string; id: number }> = [
    {
      name: "sakib",
      id: 23,
    },
    {
      name: "sohan",
      id: 25,
    },
    {
      name: "surat",
      id: 26,
    },
  ];

  //generic type use in tuple
  type GenericTuple<x, y> = [x, y];
  const personInfo: GenericTuple<string, string> = ["sakib", "sohan"];
  const userWithId: GenericTuple<number, { name: string; id: number }> = [
    2343,
    { name: "sakib", id: 12 },
  ];

  //
}
