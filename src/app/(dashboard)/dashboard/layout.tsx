import UserTemplate from "@/modules/dashboard/components/template/UserTemplate";
const layout = ({ children }: { children: React.ReactNode }) => {
  return <UserTemplate>{children}</UserTemplate>;
};

export default layout;
