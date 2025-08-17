import type { AccountSummary } from "@/types";
import data from "@/data/data.json";

const getAccount = () => {
  return data as AccountSummary;
};

export default getAccount;
