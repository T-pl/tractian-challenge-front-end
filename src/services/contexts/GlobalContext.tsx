import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

type Company = {
  id: string;
  name: string;
};

type CompanyContextType = {
  companies: Company[];
  selectedCompany: Company | null;
  setSelectedCompany: React.Dispatch<React.SetStateAction<Company | null>>;
  loading: boolean;
  error: Error | null;
};

export const CompanyContext = createContext<CompanyContextType>({
  companies: [],
  selectedCompany: null,
  setSelectedCompany: () => {},
  loading: false,
  error: null,
});

type CompanyProviderProps = {
  children: React.ReactNode;
};

export const CompanyContextProvider = ({ children }: CompanyProviderProps) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    async function fetchCompanies() {
      setLoading(true);
      try {
        const response = await api.get("/companies");
        const companiesData = await response.data;
        setCompanies(companiesData);
        setSelectedCompany(companiesData[0]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
      setLoading(false);
    }
    fetchCompanies();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        selectedCompany,
        setSelectedCompany,
        loading,
        error,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
