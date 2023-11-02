{
    //union Type

     type FrontendDeveloper = 'fakibujDeveloper' | 'juniorDevelper';
     type BackendDeveloper = 'frontendDeveloper' | 'expertDeveloper';
     type DeveloperType = FrontendDeveloper | BackendDeveloper;

     const developer : DeveloperType= 'expertDeveloper';

     type UserType = {
        name: string,
        email?: string, //optional types
        id: number,
        gender: 'male' | 'female',
        bloodGroup: 'A+' | 'B+' | 'O+';
     }

     const user: UserType = {
        name: 'sakib',
        id: 12,
        gender: 'male',
        bloodGroup: "A+"
     }

     //intersection types
     type FrontendDeveloper1 = {
        skills : string[],
        designation1 : 'Frontend Developer'
     }
     type BackendDeveloper1 = {
        skills : string[],
        designation2 : 'Backend Developer'
     }

     type FulstackDeveloper = FrontendDeveloper1 & BackendDeveloper1;

     const fulstackDeveloper: FulstackDeveloper = {
        skills: ['HTML', 'CSS', 'NODE', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
     }
}