import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonHabitCard() {
  return (
    <div className="flex items-center gap-8 px-4 bg-white rounded-lg py-4">
      <Skeleton className="h-6 w-6 rounded-full bg-gray-300" />
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between items-center">
          <Skeleton className="h-4 w-24 bg-gray-300" />
          <Skeleton className="w-10 h-3 rounded-full bg-gray-300" />
        </div>
        <Skeleton className="h-4 w-16 bg-gray-300" />
      </div>
    </div>
  );
}
