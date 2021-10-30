import React, { Component } from "react";
import Header from "../header";
import ApiService from "../../services/api-service";

import { AboutPage, SignUpPage, LoginPage, HomePage } from "../pages";

import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiService = new ApiService();

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
