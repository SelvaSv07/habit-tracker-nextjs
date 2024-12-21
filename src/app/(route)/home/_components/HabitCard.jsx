import { Circle, CircleCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function HabitCard({ habit, completed }) {
  const frequency =
    habit.frequency.length === 7
      ? "EVERY DAY"
      : `EVERY WEEK / ${habit.frequency
          .map((day) => day.slice(0, 3).toUpperCase())
          .join(" ")}`;

  function calculateProgress() {
    return Math.round((habit.goal_completed / habit.goal) * 100);
  }

  function renderProgress() {
    if (habit.goal) {
      return (
        <div className="pt-1 pb-0.5">
          <Progress
            indicatorColor={habit.color}
            value={calculateProgress()}
            className="h-1.5 rounded-full"
          />
        </div>
      );
    } else {
      return null;
    }
  }

  function renderCheckCircle() {
    if (completed) {
      return <CircleCheck className="h-6 w-6" />;
    }

    return <Circle className="h-6 w-6" />;
  }

  return (
    <div className="flex items-center gap-8 px-4 bg-white rounded-lg py-4">
      {renderCheckCircle()}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex justify-between items-center">
          <p className="text-xs font-semibold tracking-wide">{frequency}</p>
          <Badge style={{ backgroundColor: habit.color }}>
            {habit.category}
          </Badge>
        </div>
        <h2 className="text-lg font-bold tracking-wider">{habit.name}</h2>
        {renderProgress()}
      </div>
    </div>
  );
}
