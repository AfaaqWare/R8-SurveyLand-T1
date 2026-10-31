import Skeleton from "@/shared/components/atoms/Skeleton";

const FieldSkeleton = ({ inputHeight = "h-10" }: { inputHeight?: string }) => (
  <div className="flex flex-col gap-1">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="h-3 w-48" />
    <Skeleton className={`${inputHeight} w-full`} />
  </div>
);

const EditSurveySkeleton = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 pb-4">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-64" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="ds-border-card ds-bg-card ds-rounded-lg flex min-w-0 flex-col gap-5 p-4">
            <FieldSkeleton />
            <FieldSkeleton inputHeight="h-24" />
            <FieldSkeleton />
            <FieldSkeleton />
          </div>
          <div className="ds-border-card ds-bg-card ds-rounded-lg flex min-w-0 flex-col gap-3 p-4">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-3 w-40" />
            </div>
            <Skeleton className="aspect-square w-full" />
          </div>
        </div>

        <div className="ds-border-card ds-bg-card ds-rounded-lg">
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
    </div>
  );
};

export default EditSurveySkeleton;
