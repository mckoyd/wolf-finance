import PageStub from "@/components/PageStub";
import { POTS_PAGE } from "./page.config";

const Page: React.FC = () => {
  const { title, ariaLabel } = POTS_PAGE;
  return <PageStub title={title} ariaLabel={ariaLabel} />;
};

export default Page;
