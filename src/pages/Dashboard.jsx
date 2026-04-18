import AlertList from "../components/alertlist/AlertList";
import Header from "../components/header/Header";
import SwiperAlert from "../components/swiper/Swiper";
import TaskList from "../components/tasklist/TaskList";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <Header />
        </div>
        <div className="dashboard-content">
          <div className="dashboard-content--container">
            <div className="dashboard-swiperalert">
              <SwiperAlert />
            </div>
            <div className="dashboard-tasklist">
              <TaskList />
            </div>
            <div className="dashboard-alerts">
              <AlertList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
