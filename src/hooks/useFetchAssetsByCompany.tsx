import { useEffect, useState } from "react";
import api from "../services/api/axios";
import { Asset } from "../models/Assets";

type UseFetchAssetsResult = {
  assets: Asset[];
  loading: boolean;
};

export const useFetchAssetsByCompany = (
  companyId: string
): UseFetchAssetsResult => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchCompanies() {
      setLoading(true);
      try {
        const response = await api.get(`/companies/${companyId}/assets`);
        setAssets(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCompanies();
  }, [companyId]);
  return { assets, loading };
};
