"use client";

import supabase from "@/utils/supabase/client";
import { useState, useEffect, useCallback } from "react";
import HabitCard from "./HabitCard";
import Loading from "@/app/loading";
import { format, isToday } from "date-fns";
import getHabitsByUserId from "@/utils/api/getHabitsByUserId";
import getHabitLogByUserId from "@/utils/api/getHabitLogByUserId";
import SkeletonHabitCard from "./SkeletonHabitCard";

export default function HabitList() {
  const [habits, setHabits] = useState([]);
  const [habitLog, setHabitLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const USER_ID_KLAUS = "3f06401e-d580-4cd2-bb3b-4d63796b0094";
  const USER_ID_ELIJAHH = "e973adbc-bc34-4364-a58c-13b056912fde";

  useEffect(() => {
    async function fetchHabits(userId) {
      try {
        setLoading(true);
        const habitData = await getHabitsByUserId(userId);
        setHabits(habitData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchHabitLog(userId) {
      try {
        setLoading(true);
        const habitLogData = await getHabitLogByUserId(userId);
        setHabitLog(habitLogData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHabits(USER_ID_KLAUS);
    fetchHabitLog(USER_ID_KLAUS);
  }, []);

  function refreshHabitLog() {
    async function fetchHabitLog(userId) {
      try {
        setLoading(true);
        const habitLogData = await getHabitLogByUserId(userId);
        setHabitLog(habitLogData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchHabitLog(USER_ID_KLAUS);
  }

  function isHabitCompletedToday(habitId) {
    const currentHabitLog = habitLog.filter(
      (habit) => habit.habit_id === habitId
    );
    const todaysLog = currentHabitLog.filter((habit) => isToday(habit.date));
    const todaysStatus = todaysLog.length === 1 && todaysLog[0].status;
    return todaysStatus;
  }

  async function habitCompleted(habitId, status, setLoader) {
    try {
      setLoader(true);
      const { error } = await supabase
        .from("habit_logs")
        .upsert(
          {
            habit_id: habitId,
            date: format(new Date(), "yyyy-MM-dd"),
            status: status,
            note: null,
            user_id: USER_ID_KLAUS,
          },
          { onConflict: ["habit_id", "date", "user_id"] }
        )
        .select();

      if (error) {
        console.error(error);
      }

      if (!error) {
        console.log("Upserted successfully");
        refreshHabitLog();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="px-8 space-y-8 bg-[#ede2cb] pt-16">
      {habits.length === 0 ? (
        <div className="flex flex-col gap-6">
          <SkeletonHabitCard />
          <SkeletonHabitCard />
          <SkeletonHabitCard />
        </div>
      ) : (
        habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            alreadyCompleted={isHabitCompletedToday(habit.id)}
            completed={habitCompleted}
          />
        ))
      )}
    </div>
  );
}
