import Enrollment from "./enrollment/page";
import Home from "./home/page";
import Operations from "./operation/page";
import Price from "./price/page";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Operations />
      <Price />
      <Enrollment />
    </div>
  );
};

export default HomePage;
