import * as React from 'react';
import { Fragment, useEffect, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftMenu from "../LeftMenu/LeftMenu";
import TopMenu from "../TopMenu/TopMenu";
import { Switch, Route } from "react-router";
import Users from "../Users/Users";
import Products from "../Products/Products";
import Orders from "../Orders/Orders";
import Home from "../Home/Home";
import Notifications from "../../common/components/Notification";
import { addProduct } from "../../store/actions/products.action";
import { sp } from '@pnp/sp';

const Admin: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {

    sp.web.lists
      .getByTitle("Products")
      .select("ID, name,category,description,amount,price,hasExpiryDate")
      .items
      .top(5000)
      .get()
      .then(items => {
        
        items.map(product => {
          let produto = { id: 0, name: "", description: "", category: "", amount: 0, price: 0, hasExpiryDate: false };
          produto.id = parseInt(product.ID),
          produto.name = product.name,
          produto.description = product.description,
          produto.category = product.category,
          produto.amount = product.amount,
          produto.price = product.price,
          produto.hasExpiryDate = product.hasExpiryDate;
          dispatch(addProduct(produto));
        });

      },
      (err) => {
        console.log(err);
      });

  }, [dispatch]);

  return (
    <Fragment>
      <Notifications />
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Switch>
              <Route path={`/users`}><Users /></Route>
              <Route path={`/products`}><Products /></Route>
              <Route path={`/orders`}><Orders /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
