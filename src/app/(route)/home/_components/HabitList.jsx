import supabase from "@/utils/supabase/client";
import { useState, useEffect } from "react";

export default function HabitList() {
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data, error } = await supabase.from("habits").select();
        return data;
      }
      setHabits(fetchData);
      console.log(habits);
    } catch (error) {
      console.log(error);
    }
  });

  return <></>;
}
