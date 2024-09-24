import { useContext } from "react";
import { CompanyContext } from "../services/contexts/GlobalContext";

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompanyContext must be used within a CompanyProvider");
  }
  return context;
};
