import CustomerHeader from "./_components/CustomerHeader";
import RestaurantFooter from "./_components/RestaurantFooter";

const page = () => {
  return (
    <>
      <div>
        <CustomerHeader />
        <div className="main-banner">
          <h2 className="text-white">JetSetGo Food Delivery App</h2>
          <div className="search-wraper d-flex justify-content-center">
            <div class="input-group mb-3">
              <input type="text" class="form-control search-select" placeholder="Select Place" />
              {/* <span class="input-group-text">Sunny</span> */}
              <input type="text" class="form-control search-input" placeholder="Enter food or restaurant name" />
            </div>
          </div>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
};

export default page;