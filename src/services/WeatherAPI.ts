export const getWeatherData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
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
