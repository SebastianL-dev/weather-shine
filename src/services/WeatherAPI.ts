// export const handleInputValue = (value: string) => {
//   console.log("El valor del input es:", value);
// };

export const getWeatherData = async (value: string) => {
  console.log(value);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}&q=${value}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
