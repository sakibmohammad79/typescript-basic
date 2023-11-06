{
  //generic use in function

  const createArray = (param: string): string[] => {
    return [param];
  };

  createArray("bangladesh");

  //generic type use in function
  const genericCreateArray = <T>(param: T): T[] => {
    return [param];
  };

  const generic = genericCreateArray<boolean>(true);
  type User = {
    name: string;
    id: number;
  };
  const genericObj = genericCreateArray<User>({ name: "sakib", id: 34 });

  const genericCreateTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const genericTuple = genericCreateTuple<string, number>("sakib", 23);
  const genericTupleObject = genericCreateTuple<
    string,
    { name: string; id: number }
  >("sakib", { name: "sakib", id: 23 });

  const courseAddToStudent = <T>(student: T) => {
    const course = "Next Level Of WEb Development";
    return {
      ...student,
      course,
    };
  };

  type Student1 = { name: string, email: string, developer: string };

  const student1 = courseAddToStudent<Student1>({
    name: "Mr. X",
    email: "X@gmail.com",
    developer: "MERN",
  });
  type Student2 = { name: string, email: string, hasWatch: boolean };

  const student2 = courseAddToStudent<Student2>({
    name: "Mr. X",
    email: "X@gmail.com",
    hasWatch: true,
  });
}
