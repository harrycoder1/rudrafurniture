function chooseRandomNumber(arr:Number[]):Number {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex] ;
}

function pad(number: number): string {
    return number < 10 ? "0" + number : number.toString();
  }
export const getDayFromDateTime = ()=> {
    const datetime = new Date();
    const months: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayNames: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    const day: number = datetime.getDate();
    const monthName: string = months[datetime.getMonth()];
    const month: number = datetime.getMonth() + 1;
    const year: number = datetime.getFullYear();
    let hours: number = datetime.getHours();
    const minutes: number = datetime.getMinutes();
    const dayOfWeek: string = dayNames[datetime.getDay()];
    const ampm: string = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    const datetimeString: string =
      dayOfWeek +
      ", " +
      year +
      "-" +
      pad(month) +
      "-" +
      pad(day) +
      " " +
      pad(hours) +
      ":" +
      pad(minutes);
  
    const dateObj = {
      dayOfWeek,
      year,
      month: pad(month),
      day: pad(day),
      hours: pad(hours),
      minutes: pad(minutes),
      ampm,
      monthName,
    };
    // return dateObj;
    return datetimeString ;
  };
export{chooseRandomNumber}