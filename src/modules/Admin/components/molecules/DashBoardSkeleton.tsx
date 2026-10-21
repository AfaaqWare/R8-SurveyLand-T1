import Skeleton from "@/shared/components/atoms/Skeleton";

const DashBoardSkeleton = () => {
  return (
    <section aria-busy="true" className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="size-11 shrink-0" />
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-12" />
              </div>
            </div>
            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4">
          <Skeleton className="h-5 w-40" />
          <div className="flex flex-wrap items-center justify-center gap-6 py-2">
            <Skeleton className="size-40 shrink-0 rounded-full" />
            <div className="flex flex-col gap-3">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-7 w-16" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-7 w-16" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4">
          <Skeleton className="h-5 w-40" />
          <div className="flex flex-wrap items-center justify-center gap-6 py-2">
            <Skeleton className="size-40 shrink-0 rounded-full" />
            <div className="flex flex-col gap-3">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4">
        <Skeleton className="h-5 w-32" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </section>
  );
};

export default DashBoardSkeleton;
