{
  //generic type use in interface

  interface Developer<T, X = null> {
    name: string;
    age: number;
    computer: {
      brand: string;
      price: number;
      display: string;
    };
    smartWatch: T,
    bike? : X 
  }

  type NokiaWatch = {
    brand: string;
    price: number;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  const poorDeveloper: Developer<NokiaWatch> = {
    name: "sakib",
    age: 12,
    computer: {
      brand: "asus",
      price: 34000,
      display: "amoled",
    },
    smartWatch: {
      brand: "nokia",
      price: 12000,
      heartTrack: false,
      sleepTrack: true,
    },
  };

  interface AppleWatch {
    brand: string;
    price: number;
    heartTrack: boolean;
    model: string;
  }
  interface Bike{
    model: string,
    cc: string
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "sohan",
    age: 16,
    computer: {
      brand: "HP",
      price: 44000,
      display: "super amoled",
    },
    smartWatch: {
      brand: "nokia",
      price: 12000,
      heartTrack: true,
      model: "apple",
    },
    bike: {
        model : 'Hero',
        cc: '100cc'
    }
  };
}
