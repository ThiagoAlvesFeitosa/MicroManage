import Menu from "../../components/Menu/Menu";
import MainDash from "../../components/MainDash/MainDash";
import RightSide from "../../components/RightSide/RightSide";



const DashboardLayout = () => {
  return (
    <div className="App">
        <div className="AppGlass">
          <Menu/>
          <MainDash/>
          <RightSide/>
        </div>
    </div>
  );
};

export default DashboardLayout;
