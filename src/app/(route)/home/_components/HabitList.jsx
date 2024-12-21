"use client";

import supabase from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import HabitCard from "./HabitCard";
import Loading from "@/app/loading";
import { isToday } from "date-fns";

export default function HabitList() {
  const [habits, setHabits] = useState(null);
  const [habitLog, setHabitLog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const USER_ID_KLAUS = "3f06401e-d580-4cd2-bb3b-4d63796b0094";
    const USER_ID_ELIJAHH = "e973adbc-bc34-4364-a58c-13b056912fde";

    async function fetchHabits(userId) {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    async function fetchHabitLog(userId) {
      try {
        setLoading(true);
        const { data: habitLogData, error: habitLogError } = await supabase
          .from("habit_logs")
          .select("*")
          .eq("user_id", userId);

        if (habitLogError || !habitLogData) {
          console.error(habitLogError);
        }

        if (habitLogData) {
          setHabitLog(habitLogData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHabits(USER_ID_ELIJAHH);
    fetchHabitLog(USER_ID_ELIJAHH);
  }, []);

  function isHabitCompletedToday(habitId) {
    const currentHabitLog = habitLog.filter(
      (habit) => habit.habit_id === habitId
    );
    const todaysLog = currentHabitLog.filter((habit) => isToday(habit.date));
    const todaysStatus = todaysLog.length === 1 && todaysLog[0].status;
    return todaysStatus;
  }

  if (loading || !habitLog || !habits) {
    return <Loading message="Data is loading ..." />;
  }

  return (
    <div className="px-8 space-y-8 bg-[#ede2cb] pt-16">
      {habits &&
        habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completed={isHabitCompletedToday(habit.id)}
          />
        ))}
    </div>
  );
}
