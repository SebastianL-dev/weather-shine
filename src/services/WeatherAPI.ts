export const getWeatherData = async (value: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}data/2.5/weather?units=metric&q=${value}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountry = async (value: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}geo/1.0/direct?q=${value}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAirPollution = async (lat: number, lon: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getForecast = async (lat: number, lon: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&cnt=24&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
