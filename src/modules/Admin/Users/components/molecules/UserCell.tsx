interface UserCellProps {
  name: string;
  email: string;
  image: string | null;
}

export default function UserCell({ name, email, image }: UserCellProps) {
  const initials = name.trim().slice(0, 2).toUpperCase() || "?";

  return (
    <div className="flex min-w-0 items-center gap-3">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="size-10 shrink-0 rounded-full object-cover" />
      ) : (
        <span
          aria-hidden="true"
          className="ds-bg-form ds-text-secondary flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
        >
          {initials}
        </span>
      )}

      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="ds-text-secondary ds-text-xs truncate">{email}</p>
      </div>
    </div>
  );
}