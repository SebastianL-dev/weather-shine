import { useForecastContext } from "@/contexts/forecastCtx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Mousewheel,
} from "swiper/modules";

import { WiDayCloudy } from "react-icons/wi";
import SwiperSkeleton from "../skeletons/sWiperSkeleton";

export function TempSwiper() {
  const { forecastData } = useForecastContext();

  return (
    <>
      {forecastData == undefined ? (
        <SwiperSkeleton />
      ) : (
        <Swiper
          effect="coverflow"
          navigation
          grabCursor
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
          loop={true}
          slidesPerView={3}
          spaceBetween={12}
          centeredSlides
          mousewheel
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-[30rem] justify-center m-0 overflow-visible"
        >
          {forecastData &&
            forecastData.list.map((weatherD, index) => {
              const { main, dt, weather } = weatherD;

              const Dates = (date?: number) => {
                if (date === undefined) {
                  return "";
                }
                if (forecastData.city.timezone === undefined) {
                  return "";
                }

                const localTime = dt * 1000;
                const timeOffset = forecastData.city.timezone * 1000;
                const localDate = new Date(localTime + timeOffset);

                const formattedLocalSunrise = localDate.toLocaleTimeString(
                  "es-US",
                  {
                    hour: "numeric",
                    minute: "2-digit",
                    timeZone: "UTC",
                  }
                );

                return formattedLocalSunrise;
              };

              return (
                <SwiperSlide key={index}>
                  <div className="bg-[#3b82f6] bg-opacity-5 border-2 border-blue-500 border-opacity-20 justify-center flex m-0 flex-col items-center p-4 gap-2 rounded-md">
                    <span className="text-blue-200 text-opacity-55">
                      {Dates(dt)}
                    </span>
                    <WiDayCloudy className="h-16 w-16" />
                    <div className="flex gap-1 flex-col items-center">
                      <span className="text-sm text-blue-300 text-opacity-40 ">
                        {main.temp.toFixed(1) + "°C"}
                      </span>
                      <span className="text-sm text-white">
                        {weather[0].main}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </>
  );
}
