import { data } from "./data";
import { VideoCard } from "./VideoCard";

export const Examples = () => {
  return (
    <div className="mt-10 lg:mt-20" id="examples">
      <div className="uppercase text-center">
        <div className="text-[22px] sm:text-4xl lg:text-3xl font-bold">
          Анімація зображень та відеоприклади
        </div>
        <div className="text-[16px] sm:text-[20px] font-medium mt-1">
          Перегляньте неймовірні трансформації, народжені зі спогадів наших
          клієнтів.
        </div>
      </div>
      <div className="mt-4 flex justify-center flex-wrap gap-4">
        {data.map((item, index) => (
          <div key={index}>
            <VideoCard src={item.video} poster={item.preview} />
          </div>
        ))}
      </div>
    </div>
  );
};
