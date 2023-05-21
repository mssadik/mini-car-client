import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";
import Medical from "./Medical/Medical";
import Military from "./Military/Military";
import Sports from "./Sports/Sports";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [cars, setCars] = useState([])
  useEffect(() => {
    fetch('https://test-two-sigma-13.vercel.app/category')
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="shop-by-category-container">
      <h2 className="shop-by-category-title text-white font-bold">Shop by Category</h2>
      <hr className="mb-5 mt-0 mx-40" />
      <Tabs
        selectedIndex={activeTab}
        onSelect={handleTabChange}
        className="custom-tabs"
      >
        <TabList className="custom-tab-list">
          <Tab className="custom-tab font-semibold">Military</Tab>
          <Tab className="custom-tab font-semibold">Medical</Tab>
          <Tab className="custom-tab font-semibold">Sports</Tab>
        </TabList>

        <TabPanel className="custom-tab-panel">
          <div className="flex flex-wrap gap-5">
            {
              cars.filter(car => car.category === "Military").map(car => <Military key={car._id} car={car}></Military>)
            }

          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel">
          <div className="flex flex-wrap gap-5">
            {
              cars.filter(car => car.category === "Medical").map(car => <Medical key={car._id} car={car}></Medical>)
            }
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel">
          <div className="flex flex-wrap gap-5">
            {
              cars.filter(car => car.category === "Sports").map(car => <Sports key={car._id} car={car}></Sports>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
