"use client";

import { useState } from 'react'
function SummaryData({ quantity, status }) {
    return (
        <div className="summary-data-card">
            <div className="summary-quantity">{quantity}</div>
            <div className="summary-status">{status}</div>
        </div>
    )
}


export default function SummaryCard({ accountData, setData,summary }) {

    
    const [retryLoading, setRetryLoading] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const failedData = accountData.filter((a) => a.status === "Check failed");
    async function retryFailed() {
        setRetryLoading(true);

        setErrMessage("");
        try {
            const response = await fetch("/api/check-account", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    failedData
                })
            });
            const resultData = await response.json();
            if (!response.ok) {
                setErrMessage(resultData.message);
                return;
            }

            setData((prevData) => {
                const updateCategory = (category) => {
                    return category.map((plat) => {
                        const updated = resultData.updatedData.find(
                            (d) => d.platform === plat.platform
                        );

                        if (updated) {
                            return updated;
                        }

                        return plat;
                    });
                };

                return {
                    ...prevData,
                    socialMediaCategory: updateCategory(prevData.socialMediaCategory),
                    eCommerceCategory: updateCategory(prevData.eCommerceCategory),
                    foodDeliveryCategory: updateCategory(prevData.foodDeliveryCategory),
                    travelCategory: updateCategory(prevData.travelCategory)
                };
            });



        }
        catch (error) {
            setErrMessage("Unable to fetch results. Please try again.");
        } finally {
            setRetryLoading(false);
        }
    }

    return (
        <main className="summary-card">
            <header >
                <h2 className="overall-summary"> {summary.registered} out of {summary.total} registered</h2>
            </header>
            <section >
                <div className="cards">
                    <SummaryData quantity={summary.registered} status="Registered" />
                    <SummaryData quantity={summary.notRegistered} status="Not Registered" />
                    <SummaryData quantity={summary.failed} status="Check Failed" />
                    <SummaryData quantity={summary.total} status="Total Platforms" />
                </div>
                {summary.failed > 0 && <div className="retry">
                    <button className="retry-button" disabled={retryLoading} onClick={
                        () => {
                            retryFailed();
                        }
                    }>
                        {retryLoading && <span className='spinner'></span>}
                        {retryLoading ? "Retrying ..." : `Retry Failed (${summary.failed})`}
                    </button>
                </div>}
                <div className='error-display-section'>
                    {errMessage && <div className='err-message'>! {errMessage}</div>}
                </div>
            </section>
        </main>
    )
}