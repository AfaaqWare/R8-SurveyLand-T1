import { CircleAlert, Inbox } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import { TableCell, TableRow } from "@/shared/components/molecules/Table";

interface TableMessageProps {
  colSpan: number;
  message: string;
  isError?: boolean;
  retryLabel?: string;
  onRetry?: () => void;
}

const TableMessage = ({
  colSpan,
  message,
  isError = false,
  retryLabel,
  onRetry,
}: TableMessageProps) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="py-8 text-center">
        <div className="flex flex-col items-center gap-3">
          {isError ? (
            <CircleAlert className="ds-text-danger size-8" />
          ) : (
            <Inbox className="ds-text-disabled size-8" />
          )}

          <Text  className={`ds-text-sm ${isError ? "ds-text-danger" : "ds-text-secondary"}`}>
            {message}
          </Text>

          {isError && onRetry && (
            <Button variant="outline" size="sm" onClick={onRetry}>
              {retryLabel}
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableMessage;
