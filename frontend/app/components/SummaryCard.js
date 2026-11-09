function SummaryData({quantity,status}){
    return(
        <div className="summary-data-card">
            <div className="summary-quantity">{quantity}</div>
            <div className="summary-status">{status}</div>
        </div>
    )
}

export default function SummaryCard({ accountData }) {
    // const registered = accountData.filter((a) => (
    //     a.status == "Registered"
    // ));

    return (
        <main className="summary-card">
            <header >
              <h2 className="overall-summary">  8 out of 12 registered</h2>
            </header>
            <section className="cards">
<SummaryData quantity="5" status="Registered"/>
<SummaryData quantity="5" status="Not Registered"/>
<SummaryData quantity="5" status="Check Failed"/>
<SummaryData quantity="5" status="Total Platforms"/>
            </section>
        </main>
    )
}