import Slider from "react-slick";
import { data } from "./data";

export const Comments = () => {
  const getSlidesToShow = () => {
    if (typeof window === "undefined") return 1;

    if (window.matchMedia("(max-width: 640px)").matches) return 1;
    if (window.matchMedia("(max-width: 1024px)").matches) return 2;
    return 3;
  };

  const settings = {
    lazyLoad: "ondemand",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-10 lg:mt-20 bg-serenade py-10" id="comments">
      <div className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] xl:max-w-[75%] m-auto ">
        <div className="uppercase text-center">
          <div className="text-[22px] sm:text-4xl lg:text-3xl font-bold">
            Відгуки наших клієнтів
          </div>
          <div className="text-[16px] sm:text-[20px] font-medium mt-1">
            Історії які надихають
          </div>
        </div>
        <div className="py-10 relative">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="p-3">
                <div className="bg-white min-h-[365px] sm:min-h-[500px] lg:min-h-[420px] xl:min-h-[365px] p-5 h-full rounded-lg shadow-md flex flex-col justify-between">
                  <div className="min-h-[200px]">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <div className="text-gray-700">{item.text}</div>
                  </div>
                  <div className="flex items-center mt-4">
                    <img
                      loading="lazy"
                      src={item.img}
                      alt={item.name}
                      className="h-20 w-20 rounded-full  object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-gray-500">{item.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Comments;
