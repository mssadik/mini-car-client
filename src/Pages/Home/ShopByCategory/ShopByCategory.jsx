import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";
import Medical from "./Medical/Medical";
import Military from "./Military/Military";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [cars, setCars] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/cars')
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="shop-by-category-container">
      <h2 className="shop-by-category-title">Shop by Category</h2>
      <Tabs
        selectedIndex={activeTab}
        onSelect={handleTabChange}
        className="custom-tabs"
      >
        <TabList className="custom-tab-list">
          <Tab className="custom-tab">Category 1</Tab>
          <Tab className="custom-tab">Category 2</Tab>
          <Tab className="custom-tab">Category 3</Tab>
        </TabList>

        <TabPanel className="custom-tab-panel">
          <div className="flex gap-5">
            {
              // cars.filter(car => car.subCategory === "Medical").map(car => <p key={car._id}>{car.subCategory} {car.toyName}</p>)
              cars.filter(car => car.subCategory === "Medical").map(car => <Medical key={car._id} car={car}></Medical>)
            }
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel">
          <div className="flex">
              {
                cars.filter(car => car.subCategory === "Military").map(car => <Military key={car._id} car={car}></Military>)
              }
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel">
          <div className="">
            <h3 className="sub-category">Sub-category 3.1</h3>
            <h3 className="sub-category">Sub-category 3.2</h3>
            <h3 className="sub-category">Sub-category 3.3</h3>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
