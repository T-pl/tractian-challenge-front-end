import sensorIcon from "../../assets/sensorIcon.png";
import receptorIcon from "../../assets/receptorIcon.png";
import mecanicIcon from "../../assets/mecanicalManagerIcon.png";
import addImage from "../../assets/addImage.png";
import AssetsProps from "./AssetsProps";

type PropsAssets = {
  id: string;
  title: string;
  image: string | null;
  isComponent: boolean;
};

function ContainerAssetsProps() {
  const dataPropsAssets: PropsAssets[] = [
    { title: "Sensor", id: "BGHRTYD", image: sensorIcon, isComponent: true },
    {
      title: "Receptor",
      id: "FDSFEGREGT",
      image: receptorIcon,
      isComponent: true,
    },
    {
      title: "Tipo de Equipamento",
      id: "Motor Elétrico Trifásico",
      image: null,
      isComponent: false,
    },
    {
      title: "Responsáveis",
      id: "Mecânica",
      image: mecanicIcon,
      isComponent: false,
    },
  ];
  return (
    <div className="border border-bordercontainer w-[60%] rounded-sm ">
      <h2 className="text- border-b border-bordercontainer px-2 h-12 flex items-center">
        MOTOR X{}
      </h2>
      <div className="flex border-b py-4 mx-2">
        <div className="border w-[340px] h-[226px] bg-bgbox flex  flex-col justify-center items-center border-dashed border-boxborder">
          <img src={addImage} alt="Add Image" />
          <p>Adicionar imagem do Ativo</p>
        </div>
        <div className="ml-4 w-full">
          {dataPropsAssets.map((property, index) => {
            if (!property.isComponent) {
              return (
                <AssetsProps
                  key={index}
                  id={property.id}
                  title={property.title}
                  image={property.image}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      <div>
        {dataPropsAssets.map((property, index) => {
          if (property.isComponent) {
            return (
              <AssetsProps
                key={index}
                id={property.id}
                title={property.title}
                image={property.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ContainerAssetsProps;
