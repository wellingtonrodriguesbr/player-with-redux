import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export function Video() {
  const dispatch = useAppDispatch();
  const lesson = useCurrentLesson();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  if (!lesson.currentLesson) return null;

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        {isCourseLoading ? (
          <div className="h-full flex justify-center items-center">
            <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
          </div>
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            onEnded={() => dispatch(next())}
            playing
            url={`https://www.youtube.com/watch?v=${lesson.currentLesson.id}`}
          />
        )}
      </div>
    </div>
  );
}
