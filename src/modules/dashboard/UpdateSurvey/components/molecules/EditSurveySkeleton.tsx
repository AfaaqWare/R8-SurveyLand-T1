import Skeleton from "@/shared/components/atoms/Skeleton";

const EditSurveySkeleton = () => {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-64" />
      </div>
      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-4 p-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg flex flex-col gap-3 p-4">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
      </div>

      <Skeleton className="h-16 w-full" />
    </section>
  );
};

export default EditSurveySkeleton;
