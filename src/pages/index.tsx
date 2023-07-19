import TemperatureDisplay from "@components/temperature";

const Index = () => {
  return (
    <div className="m-4">
      <TemperatureDisplay max={90} min={20} className="h-72 w-72" />
    </div>
  );
};

export default Index;
