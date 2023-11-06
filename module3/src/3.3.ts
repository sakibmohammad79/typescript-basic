{
  //type guard ==> typeof
  type NumericAlpha = string | number;
  const add = (
    num1:  NumericAlpha,
    num2:  NumericAlpha
  ): NumericAlpha => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };
  const result1 = add("2", "3");
  console.log(result1);

  //in gured
  type NormalUser = {
    name: string
  }
  type AdminUser = {
    name: string,
    role: string,
  }
  const normalUser : NormalUser = {
    name: 'sakib'
  }
  const adminUser: AdminUser = {
    name: 'sohan',
    role: 'admin'
  }
  //check admin
  const checkAdmin = (user: NormalUser|AdminUser) => {
    if('role' in user) {
        console.log(`my name is ${user.name} and my role is ${user.role}`)
    }
    else{
        console.log(`my name is ${user.name}`)
    }
  }

  const user2 = checkAdmin(adminUser);
  console.log(user2);











}
