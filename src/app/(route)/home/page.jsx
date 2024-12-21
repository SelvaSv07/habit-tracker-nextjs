import Header from "./_components/Header";
import HabitList from "./_components/HabitList";

export default function Home() {
  return (
    <div>
      <header className="px-3 bg-[#ede2cb]">
        <Header />
      </header>
      <HabitList />
    </div>
  );
}
