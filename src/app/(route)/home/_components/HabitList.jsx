"use client";

import supabase from "@/utils/supabase/client";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Circle, CircleCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

function HabitCard({ habit }) {
  const frequency =
    habit.frequency.length === 7
      ? "EVERY DAY"
      : `EVERY WEEK / ${habit.frequency
          .map((day) => day.slice(0, 3).toUpperCase())
          .join(" ")}`;
  console.log(frequency);

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

  return (
    <div className="flex items-center gap-8 px-4 bg-white rounded-lg py-4">
      <Circle className="h-6 w-6" />
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

export default function HabitList() {
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    async function fetchHabits(userId) {
      try {
        const { data: habitsData, error: habitsError } = await supabase
          .from("habits")
          .select("*")
          .eq("user_id", userId);

        if (habitsError || !habitsData) {
          console.error(habitsError);
        }

        if (habitsData) {
          setHabits(habitsData);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchHabits("3f06401e-d580-4cd2-bb3b-4d63796b0094");
  }, []);

  return (
    <div className="px-8 space-y-8 bg-[#ede2cb] pt-16">
      {habits &&
        habits.map((habit) => <HabitCard key={habit.id} habit={habit} />)}
    </div>
  );
}
