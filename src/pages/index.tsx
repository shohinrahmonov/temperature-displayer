import TemperatureDisplay from "@components/temperature";

const Index = () => {
  return (
    <div className="m-4">
      <TemperatureDisplay max={300} min={10} className="h-72 w-72" />
    </div>
  );
};

export default Index;
