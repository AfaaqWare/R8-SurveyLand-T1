import { Loader, Send } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import { Card } from "@/shared/components/atoms/Card";
import Icon from "@/shared/components/atoms/Icon";

interface SurveyFormActionsProps {
  cancelLabel: string;
  saveLabel: string;
  onCancel: () => void;
  disableSave: boolean;
  isPending: boolean;
}

const SurveyFormActions = ({
  cancelLabel,
  saveLabel,
  onCancel,
  disableSave,
  isPending,
}: SurveyFormActionsProps) => {
  return (
    <Card className="ds-border-card ds-bg-card flex-row items-center justify-between gap-2 p-4 shadow-none">
      <Button variant="outline" size="sm" onClick={onCancel} disabled={isPending}>
        {cancelLabel}
      </Button>

      <Button type="submit" variant="primaryWhite" size="sm" disabled={disableSave || isPending} >
        {isPending ? (
          <>
            <Icon IconComponent={Loader} size={20} variant="white" className="animate-spin" />
            {saveLabel}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {saveLabel}
          </>
        )}
      </Button>
    </Card>
  );
};

export default SurveyFormActions;
