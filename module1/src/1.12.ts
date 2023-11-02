{
  //nullable type
  const searchingName = (value: string | null) => {
    if (value) {
      console.log("searchingName");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchingName(null);

  //unknown types
  const getSpeedInMeeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the Converted Speed is${convertedSpeed} m/s`);
    }
     else if (typeof value === "string") {
      const [speedValue, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(speedValue) * 1000) / 3600;
      console.log(`the Converted Speed is ${convertedSpeed} m/s`);
    }
    else{
        console.log('wrong input')
    }
  };

  getSpeedInMeeterPerSecond(null);

  //never type
  const throwError = (msg: string) => {
    throw new Error(msg);
  }

  throwError('mushkil se error hogaya')



}
