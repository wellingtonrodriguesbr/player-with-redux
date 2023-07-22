import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch } from "../store";

export function Video() {
  const dispatch = useAppDispatch();
  const lesson = useCurrentLesson();

  if (!lesson.currentLesson) return null;

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={() => dispatch(next())}
          playing
          url={`https://www.youtube.com/watch?v=${lesson.currentLesson.id}`}
        />
      </div>
    </div>
  );
}
