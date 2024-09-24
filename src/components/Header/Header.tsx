import logoTractian from "../../assets/logoTractian.png";
import treeView from "../../assets/treeIcon.png";
import { useCompanyContext } from "../../hooks/useCompanyContext";

type Company = {
  id: string;
  name: string;
};
export const Header = () => {
  const { loading, companies, error, selectedCompany, setSelectedCompany } =
    useCompanyContext();
  if (error) {
    return <p>Something went wrong</p>;
  }
  function handleSelectCompany(company: Company) {
    setSelectedCompany(company);
  }
  return (
    <nav className="bg-main w-full h-12 p-4 flex justify-between items-center text-neutral">
      <img src={logoTractian} alt="Tractian Logo" />
      <ul className="w-50 flex gap-2 items-center">
        {loading ? (
          <p>...</p>
        ) : (
          companies?.length > 0 &&
          companies.map((company: Company) => (
            <li className="text-neutral" key={company.id}>
              <button
                onClick={() => handleSelectCompany(company)}
                className={`${
                  selectedCompany?.id === company.id
                    ? "bg-bluefocus"
                    : "bg-blueBtn"
                } flex items-center gap-1 text-base w-auto h-7 px-3 py-3`}
              >
                <img src={treeView} alt="TreeView Icon" />
                {company.name}
              </button>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};
