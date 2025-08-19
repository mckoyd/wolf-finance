import PageStub from "@/components/PageStub";
import { TRANSACTIONS_PAGE } from "./page.config";

const Page: React.FC = () => {
  const { title, ariaLabel } = TRANSACTIONS_PAGE;
  return <PageStub title={title} ariaLabel={ariaLabel} />;
};

export default Page;
