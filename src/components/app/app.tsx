import React, { Component } from "react";
import Header from "../header";
import DataService from "../../services/data-service";

import {
  AboutPage,
  SignUpPage,
  LoginPage,
  HomePage,
  SelectItemsPage,
  CustomItemsPage,
  GraphPage,
  NotFoundPage,
} from "../pages";


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiService = new DataService();

  render() {
    return (
      <BrowserRouter>        

          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/select-items" element={<SelectItemsPage />} />
            <Route path="/custom-items" element={<CustomItemsPage />} />
            <Route path="/graph-page" element={<GraphPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
       
      </BrowserRouter>
    );
  }
}
