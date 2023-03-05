import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DoctorSearchResults from "./DoctorSearchResults";

function ResultContainer() {
  return (
    <>
      <Navbar />
      <DoctorSearchResults />
      <Footer />
    </>
  );
}

export default ResultContainer;
