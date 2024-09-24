import { useCompanyContext } from "../../hooks/useCompanyContext";
import { useFetchAssetsByCompany } from "../../hooks/useFetchAssetsByCompany";
import searchIcon from "../../assets/searchIcon.png";

function ContainerTreeView() {
  const { selectedCompany } = useCompanyContext();
  const getAssets = useFetchAssetsByCompany(
    selectedCompany ? selectedCompany?.id : ""
  );

  return (
    <div className="border border-bordercontainer w-[40%] rounded-sm ">
      <form className="flex border-b border-bordercontainer">
        <input
          placeholder="Buscar Ativo ou Local"
          type="text"
          className="m-0 w-[100%] p-2 outline-none "
        />
        <button className="px-4">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
      <div className="p-2">
        {getAssets.loading && <p>Carregando Ativos...</p>}

        {getAssets.assets.length > 0 && (
          <ul>
            {getAssets.assets.map((asset) => {
              return <li key={asset.id}>{asset.name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ContainerTreeView;
