import "./App.css";
import Navbar from "./Components/nav/NavBar";
import Sidebar from "./Components/sideBar/SideBar";
import SellersList from "./Components/sellers/SellersList";
import Product from "./Components/products/Product ";
import Dashboard from "./Components/dashboard/dashboard";
import SalesData from "./Components/chart/salesData";
import Users from "./Components/users/Users";
import UserDetails from "./Components/users/userDetails";
import Orders from "./Components/orders/orders";
// import Footer from "./Components/footer/footer";
import Products from "./Components/orders/Orderdetails";
import SellerRequest from "./Components/requests/sellerRequest";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcom from "./Components/welcomePage/Welcom";
import SellerDetails from "./Components/sellers/SellersDetails";
import Sales from "./Components/sales/sales "
import DeActivegetSellers from "./Components/sellers/DeActiveSeller"
import Category from "./Components/Category/category"
import { AddToCategory } from "./Components/Store/AddCategoryAction";
import ProductsList from "./Components/product/product";
import UnAcceptProductsList from "./Components/product/unAcceptPrd";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="row">
          <Sidebar className="col-lg-3 fixed" />

          <div className="col-lg-9">
            <Switch>
              <Route path="/SellersList" component={SellersList} />
              <Route path="/sellerslistdeactive" component={DeActivegetSellers} />
              <Route path="/Products" component={Product} />
              <Route path="/Sales" component={Sales} />
              <Route path="/Users" component={Users} />
              <Route path="/userDetails" component={UserDetails}/>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/orders" component={Orders} />
              <Route path="/sellerrequest" component={SellerRequest} />
              <Route path="/category" component={Category} />
              <Route path="/addcategory" component={AddToCategory} />
              <Route path="/productlist" component={ProductsList}/>
              <Route path="/unacceptprd" component={UnAcceptProductsList}/>
              <Route path="/orderDetails" component={Products} />
              <Route path="/SellerDetails" component={SellerDetails} />
              <Route path='/salesDetails' component={SalesData}/>
              <Route path="" component={Welcom} />
              
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
