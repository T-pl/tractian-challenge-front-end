import energyIcon from "../../assets/eletricIcon.png";
import warningIcon from "../../assets/warningIcon.png";
import { useCompanyContext } from "../../hooks/useCompanyContext";

type StatusComponentProps = {
  name: string;
  image: string;
};

function StatusComponent() {
  const { selectedCompany } = useCompanyContext();
  const statusComponentProps: StatusComponentProps[] = [
    { name: "Sensor de Energia", image: energyIcon },
    { name: "Crítico", image: warningIcon },
  ];
  return (
    <div className="flex justify-between items-center ">
      <h1>
        Ativos /{" "}
        <span className="text-[#77818C]"> {selectedCompany?.name}</span>
      </h1>
      <div className="flex w-84 gap-2 ">
        {statusComponentProps.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-2 border border-[#D8DFE6] h-8"
          >
            <img src={item.image} alt={item.name} className="w-6 h-6 mr-2 w-" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatusComponent;
