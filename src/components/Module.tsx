import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  title: string;
  lessonsAmount: number;
  moduleIndex: number;
}

export function Module({ title, lessonsAmount, moduleIndex }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 text-zinc-400 ml-auto" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Desvendando o Redux" duration="10:18" />
        <Lesson title="Avançando com Zustand" duration="15:02" />
      </nav>
    </div>
  );
}
