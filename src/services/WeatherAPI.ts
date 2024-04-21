export const getWeatherData = async (value: string) => {
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

export const getCountry = async (value: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTRY_URL}q=${value}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
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

export const getCountryData = async (value: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTRY_INFO_URL}${value}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
