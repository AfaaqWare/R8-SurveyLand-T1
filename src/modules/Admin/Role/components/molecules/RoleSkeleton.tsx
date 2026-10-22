import Skeleton from "@/shared/components/atoms/Skeleton";

const RoleSkeleton = () => {
  return (
    <section aria-busy="true" className="flex w-full max-w-225 flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="ds-border-card ds-bg-card ds-rounded-lg flex min-h-78.5 w-full max-w-104.5 min-w-0 flex-col gap-3 p-4">
          <Skeleton className="h-5 w-36" />

          <div className="flex items-start gap-3">
            <Skeleton className="size-15 shrink-0 rounded-full!" />

            <div className="flex flex-1 flex-col gap-3">
              <Skeleton className="h-4 w-40 max-w-full" />
              <Skeleton className="h-4 w-48 max-w-full" />
            </div>
          </div>
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg flex min-h-78.5 w-full max-w-104.5 min-w-0 flex-col gap-3 p-4">
          <Skeleton className="h-5 w-36" />

          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSkeleton;
