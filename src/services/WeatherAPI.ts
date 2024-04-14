// fetch(`${process.env.API_URL}&appid=${process.env.API_KEY}`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const a = document.getElementById("countryName");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export const getWeatherData = async () => {
  try {
    const res = await fetch(
      `${process.env.API_URL}&appid=${process.env.API_KEY}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
