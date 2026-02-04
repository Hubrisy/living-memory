import { useRef, useState } from "react";
import clsx from "clsx";
import Play from "../../assets/imgs/icons/play.png";

export const VideoCard = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const handleToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative w-[350px] h-[200px] sm:w-[450px] md:w-[280px] xl:w-[300px] 2xl:w-[350px] rounded-xl overflow-hidden cursor-pointer group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div
        onClick={handleToggle}
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/20",
          !isPlaying ? "opacity-100 group-hover:opacity-100" : "opacity-0",
        )}
      >
        {!isPlaying && <img src={Play} className="w-14 h-14" />}
      </div>
    </div>
  );
};
