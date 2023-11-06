{
  //learn constraints

  const addToStudent = <T extends {name: string; id: number; email: string}>(studet: T) => {
    const course = "next level web developer";
    return {
      course,
      ...studet,
    };
  };

  type Student1 = {
    name: string;
    id: number;
    email: string;
    dev: string;
  };

  const student1 = addToStudent<Student1>({
    name: "Ms.x",
    id: 12,
    email: "x@gmail.com",
    dev: "Mern",
  });

  type Student2 = {
    name: string;
    id: number;
    email: string;
    hasWatch: boolean;
  };

  const student2 = addToStudent<Student2>({
    name: "Ms.y",
    id: 14,
    email: "y@gmail.com",
    hasWatch: true,
  });

  type Student3= {
    name: string;
    id: number;
    email: string;
    emni: string;
  };

  const student3 = addToStudent<Student3>({
    emni: 'emni',
    name: "Ms.y",
    id: 15,
    email: "y@gmail.com",
  });

  
}
