import CustomerHeader from "@/app/_components/CustomerHeader"

const RestaurantDetail = (props) => {
  let name = props.params.name
  return (
    <>
      {/* <h1>restaurant-detail</h1>  */}
      <div>
        <CustomerHeader/>
      <div className="main-banner">
          <h2 className="text-white">{decodeURI(name)} Restaurant Detail Page </h2>
        </div>
      </div>
    </>
  )
}

export default RestaurantDetail