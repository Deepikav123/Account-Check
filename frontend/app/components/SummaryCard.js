import { useState } from 'react'
function SummaryData({ quantity, status }) {
    return (
        <div className="summary-data-card">
            <div className="summary-quantity">{quantity}</div>
            <div className="summary-status">{status}</div>
        </div>
    )
}

export default function SummaryCard({ accountData }) {

    const registered = accountData.filter((a) => (
        a.status == "Registered"
    )).length;

    const notRegistered = accountData.filter(
        a => a.status === "Not-registered"
    ).length;

    const failed = accountData.filter(
        a => a.status === "Check-Failed"
    ).length;

    const total = accountData.length;
    const [retryLoading, setRetryLoading] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const failedData = accountData.filter((a) => a.status === "Check-Failed");
    console.log(failedData);
    async function retryFailed() {
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
            const data = await response.json();
            if (!response.ok) {
                setErrMessage(data.message);
                return;
            }
            // accountData.map((a)=>({
            //     ...a,
            //     a.status==
            // }))
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
                <h2 className="overall-summary"> {registered} out of {total} registered</h2>
            </header>
            <section >
                <div className="cards">
                    <SummaryData quantity={registered} status="Registered" />
                    <SummaryData quantity={notRegistered} status="Not Registered" />
                    <SummaryData quantity={failed} status="Check Failed" />
                    <SummaryData quantity={total} status="Total Platforms" />
                </div>
                {failed && <div className="retry">
                    <button className="retry-button" disabled={retryLoading} onClick={
                        () => {
                            setRetryLoading(true);
                            retryFailed();
                        }
                    }>
                        {retryLoading && <span className='spinner'></span>}
                        {retryLoading ? "Retrying ..." : `Retry Failed (${failed})`}
                    </button>
                </div>}
                <div className='error-display-section'>
                    {errMessage && <div className='err-message'>! {errMessage}</div>}
                </div>
            </section>
        </main>
    )
}