import PageStub from "@/components/PageStub";
import { BUDGETS_PAGE } from "./page.config";

const Page: React.FC = () => {
  const { title, ariaLabel } = BUDGETS_PAGE;
  return <PageStub title={title} ariaLabel={ariaLabel} />;
};

export default Page;
