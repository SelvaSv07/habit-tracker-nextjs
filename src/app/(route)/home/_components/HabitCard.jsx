"use client";

import { Circle, CircleCheck, Loader } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

export default function HabitCard({ habit, completed, alreadyCompleted }) {
  const [loading, setLoading] = useState(false);

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

  const setLoader = useCallback((loadingState) => {
    setLoading(loadingState);
  }, []);

  function renderCheckCircle() {
    if (loading) {
      return <Loader className="animate-spin" />;
    }

    if (alreadyCompleted) {
      return (
        <CircleCheck
          onClick={() => completed(habit.id, false, setLoader)}
          className="h-6 w-6 cursor-pointer"
        />
      );
    }

    return (
      <Circle
        className="h-6 w-6 cursor-pointer"
        onClick={() => completed(habit.id, false, setLoader)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-8 px-4 bg-white rounded-lg py-4",
        loading && "opacity-50"
      )}
    >
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
