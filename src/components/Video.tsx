import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://www.youtube.com/watch?v=u99tNt3TZf8"
        />
      </div>
    </div>
  );
}
