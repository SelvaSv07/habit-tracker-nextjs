"use server";

import supabase from "../supabase/client";

export default async function getHabitsByUserId(userId) {
  try {
    const { data: habitsData, error: habitsError } = await supabase
      .from("habits")
      .select("*")
      .eq("user_id", userId);

    if (habitsError || !habitsData) {
      console.log(habitsError);
    }

    if (habitsData) {
      return habitsData;
    }
  } catch (error) {
    console.log(error);
  }
}
