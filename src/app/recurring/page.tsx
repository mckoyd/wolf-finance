import PageStub from "@/components/PageStub";
import { RECURRING_PAGE } from "./page.config";

const Page: React.FC = () => {
  const { title, ariaLabel } = RECURRING_PAGE;
  return <PageStub title={title} ariaLabel={ariaLabel} />;
};

export default Page;
