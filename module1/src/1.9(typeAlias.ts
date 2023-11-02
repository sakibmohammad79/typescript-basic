//type Alias
{
//   const student1: {
//     name: string;
//     id: number;
//     address: string;
//     contactNo: string;
//     age: number;
//   } = {
//     name: "sakib",
//     id: 12,
//     address: "ctg",
//     contactNo: "018888888",
//     age: 23,
//   };

//   const student2: {
//     name: string;
//     id: number;
//     address: string;
//     contactNo: string;
//     age: number;
//   } = {
//     name: "sakib",
//     id: 12,
//     address: "ctg",
//     contactNo: "018888888",
//     age: 23,
//   };

//   const student3: {
//     name: string;
//     id: number;
//     address: string;
//     contactNo: string;
//     age: number;
//   } = {
//     name: "sakib",
//     id: 12,
//     address: "ctg",
//     contactNo: "018888888",
//     age: 23,
//   };

  // we can use many type in the object so we can use only one type declear using type alias
  type Student = {
    name: string;
    id: number;
    address: string;
    contactNo?: string;
    age: number;
  };

  const student1: Student = {
        name: "sakib",
        id: 12,
        address: "ctg",
        contactNo: "018888888",
        age: 23,
      };
    
      const student2: Student = {
        name: "sakib",
        id: 12,
        address: "ctg",
        age: 23,
      };
    
      const student3: Student = {
        name: "sakib",
        id: 12,
        address: "ctg",
        contactNo: "018888888",
        age: 23,
      };


      type Name = string;
      type Admin = boolean
      const myName: Name = 'sakib'
      const isAdmin: Admin = true;

      const add = (num1: number, num2: number): number => num1 + num2;
      
      //but we can use type alias for simple code;
      type AddNumber = (num1:number, num2:number) => number
      const adding: AddNumber = (num1, num2) => num1 + num2;
}
