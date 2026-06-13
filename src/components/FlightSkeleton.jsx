const FlightSkeleton = () => {
  return (
    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        shadow-lg
        p-6
        border
        dark:border-slate-800
        animate-pulse
      "
    >
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Airline */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
        </div>

        {/* Route */}
        <div className="flex items-center gap-8">
          <div className="space-y-2">
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>

          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />

          <div className="space-y-2">
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
        </div>

        {/* Price */}
        <div className="space-y-3">
          <div className="h-8 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
          <div className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default FlightSkeleton;
