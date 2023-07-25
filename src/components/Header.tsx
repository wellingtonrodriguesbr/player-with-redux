import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();
  const isLoading = useStore((store) => store.isLoading);

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2zl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        {isLoading ? "Carregando..." : `Módulo "${currentModule?.title}"`}
      </span>
    </div>
  );
}
