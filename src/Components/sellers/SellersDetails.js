import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./../firebase-config";
import "./style.css";
import { useEffect, useState } from "react";
const SellerDetails = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const [sellerProducts, setSellerProducts] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getSellerProducts = async (id) => {
    const OrdersCollectionRef = query(
      collection(db, "Products"),
      where("SellerID", "==", doc(db, `Seller/${id}`))
    );

    const Orders = await getDocs(OrdersCollectionRef);
    
    const alldata = Orders.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(alldata);
    return alldata;
  };

  useEffect(() => {
    getSellerProducts(id).then((e) => setSellerProducts(e));
  }, []);
  return (
    <>
      <div className=" table-responsive datatable-custom">
        {/* <Link to="/SellersList">  <button className="btn btn-success float-end my-2">Back</button></Link> */}
        <div className="table-responsive text-center main">
          <table className="table table-light table-striped mt-5">
            <thead className="text-center">
              <tr>
                <th scope="col-2">Product Name</th>
                <th scope="col-2">Image</th>
                <th scope="col-2">Product Price</th>
                <th scope="col-2">Cateqory</th>
                <th scope="col-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {console.log(sellerProducts)}
              {sellerProducts.map((prod, index) => {
                return (
                  <tr key={prod.id}>
                    <td className="fs-4">{prod.Name}</td>
                    <td>
                      <img src={prod.Image} width="100"></img>
                    </td>
                    <td>{prod.Price}</td>
                    <td>{prod.Category}</td>

                    <td>{prod.Description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SellerDetails;
