import Skeleton from "@/shared/components/atoms/Skeleton";

const PreviewSurveySkeleton = () => {
  return (
    <section aria-busy="true" className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-44" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-4 p-4">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="mx-auto h-6 w-52" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-4 p-4">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-36" />
        </div>
      </div>
    </section>
  );
};

export default PreviewSurveySkeleton;
