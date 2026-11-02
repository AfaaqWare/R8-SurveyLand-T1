import Skeleton from "@/shared/components/atoms/Skeleton";

const PreviewResponseSkelton = () => {
  return (
    <section aria-busy="true" className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-4 p-4">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-4 p-4">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      </div>
    </section>
  );
};

export default PreviewResponseSkelton;
