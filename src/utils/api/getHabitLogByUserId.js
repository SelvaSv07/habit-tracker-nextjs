"use server";

import supabase from "../supabase/client";

export default async function getHabitLogByUserId(userId) {
  try {
    const { data: habitLogData, error: habitLogError } = await supabase
      .from("habit_logs")
      .select("*")
      .eq("user_id", userId);

    if (habitLogError || !habitLogData) {
      console.error(habitLogError);
    }

    if (habitLogData) {
      return habitLogData;
    }
  } catch (error) {
    console.error(error);
  }
}
