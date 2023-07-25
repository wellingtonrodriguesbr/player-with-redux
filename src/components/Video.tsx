import { Loader } from "lucide-react";

import ReactPlayer from "react-player";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
  const lesson = useCurrentLesson();
  const { isLoading, next } = useStore((store) => {
    return {
      isLoading: store.isLoading,
      next: store.next,
    };
  });

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="h-full flex justify-center items-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={() => next()}
          playing
          url={`https://www.youtube.com/watch?v=${lesson?.currentLesson?.id}`}
        />
      )}
    </div>
  );
}
