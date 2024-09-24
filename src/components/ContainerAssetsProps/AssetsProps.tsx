type PropsAssets = {
  id: string;
  title: string;
  image: string | null;
};

function AssetsProps({ id, title, image }: PropsAssets) {
  return (
    <div className="flex items-center my-2 border w-full">
      <div className="border w-full">
        <p>{title}</p>
        <p className="flex">
          {image && <img src={image} alt={title} className="w-6 h-6 mr-2" />}
          {id}
        </p>
      </div>
    </div>
  );
}

export default AssetsProps;
