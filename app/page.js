"use client";
import { useState } from "react";
import homepageIcon from "./icons/homepage-icon.png"
import Image from "next/image";
import ResultTable from "./components/ResultsTable.jsx";
import SummaryCard from "./components/SummaryCard.jsx";
import downloadPDF from "./pdfGenerator.js";
export default function HomePage() {
  const [mobileNumber, setMobilenumber] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    socialMediaCategory: [],
    eCommerceCategory: [],
    foodDeliveryCategory: [],
    travelCategory: []
  });

  function postNumber(phoneNumber) {
    const valid = /^[6-9]\d{9}$/;
    if (!valid.test(phoneNumber)) {
      setErrMessage("Invalid Number");
      return false;
    }
    return true;
  }

  const allPlatforms = [
    ...data.socialMediaCategory,
    ...data.eCommerceCategory,
    ...data.foodDeliveryCategory,
    ...data.travelCategory
  ];

  const registered = allPlatforms.filter(
    p => p.status === "Registered"
  ).length;

  const notRegistered = allPlatforms.filter(
    p => p.status === "Not registered"
  ).length;

  const failed = allPlatforms.filter(
    p => p.status === "Check failed"
  ).length;

  const summary = {
    registered,
    notRegistered,
    failed,
    total: allPlatforms.length
  };


  async function fetchData() {
    setLoading(true);
    setSearch(true);
    setErrMessage("");
    try {

      const response = await fetch("/api/check-account/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mobile: mobileNumber
        })
      })
      const data = await response.json();
      if (!response.ok) {
        setErrMessage(data.message);
        return;
      }
      setData(data);

    }
    catch (error) {
      setErrMessage("Unable to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }


  }

  return (
    <main>
      <header className="homepage-header">
        <Image
          className="homepageIcon"
          src={homepageIcon}
          alt="Homepage icon"
        />
        <div className="header-info">
          <h1 className="heading">Account Check</h1>
          <p className="header-subline">Enter a mobile number to check account registration status.</p>
        </div>
      </header>
      <section className="homepage-section">
        <div className="homepage-input-body">
          <input type="tel" disabled={loading} placeholder="Enter 10-digit Indian mobile number" className="mobile-number-input" onChange={(e) => {
            setMobilenumber(e.target.value);
            setErrMessage("");
            setSearch(false);

          }} />
          <button className="search-button" disabled={loading} onClick={() => {
            const validateNumber = postNumber(mobileNumber);
            if (validateNumber) {
              fetchData();
            }

          }}> {loading && <span className="spinner"></span>}{loading ? "Checking..." : "Search"}</button>
        </div>
        {errMessage &&
          <div className="error-message"><span className="error-icon">!</span>{errMessage}</div>
        }

        {search == true && loading == false && <div className="summary-section">
          <SummaryCard accountData={allPlatforms} setData={setData} summary={summary} />
        </div>}
        {search == true && loading == false && <div className="result-cards">
          <ResultTable title="SOCIAL MEDIA" categoryData={data.socialMediaCategory} />
          <ResultTable title="E-COMMERCE" categoryData={data.eCommerceCategory} />
          <ResultTable title="FOOD DELIVERY" categoryData={data.foodDeliveryCategory} />
          <ResultTable title="TRAVEL" categoryData={data.travelCategory} />
        </div>}
        {search && !loading && <div className="download-section">
          <button onClick={() => {
            downloadPDF(mobileNumber, data, summary)
          }}
            className="download-button">
            Download PDF
          </button>
        </div>}
      </section>
    </main>
  )
}

