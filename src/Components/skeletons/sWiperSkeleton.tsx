import { SwiperSlide } from "swiper/react";

export default function SwiperSkeleton() {
  return (
    <div className="bg-[#3b82f6] bg-opacity-5 border-2 border-blue-500 border-opacity-20 justify-center flex m-0 flex-col items-center p-4 gap-2 rounded-md">
      <span className="text-blue-200 text-opacity-55">{/* {Dates(dt)} */}</span>
      {/* <WiDayCloudy className="h-16 w-16" /> */}
      <div className="flex gap-1 flex-col items-center">
        <span className="text-sm text-blue-300 text-opacity-40 ">
          {/* {main.temp.toFixed(1) + "°C"} */}
        </span>
        {/* <span className="text-sm text-white">{weather[0].main}</span> */}
      </div>
      <div className="flex items-center justify-center w-full h-48 bg-blue-300 bg-opacity-15 rounded sm:w-96 animate-pulse">
        <svg
          className="w-10 h-10 text-blue-300 text-opacity-15"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
}
