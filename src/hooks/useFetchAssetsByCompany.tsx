import { useEffect, useState } from "react";
import api from "../services/api/axios";

export const useFetchAssetsByCompany = () => {
  const [companies, setCompanies] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchCompanies() {
      setLoading(true);
      try {
        const response = await api.get("/companies");
        setCompanies(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCompanies();
  }, []);
  return { companies, loading };
};
