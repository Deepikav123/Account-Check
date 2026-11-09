
export default function ResultTable({categoryData,title}) {
    return (
        <main className="result-card">
            <header>
                <h2 className="category">{title}</h2>
            </header>
            <section>
                <table>
                    <thead>
                    <tr >
                        <th >Platform</th>
                        <th >Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {categoryData.map((c)=>(
                          <tr key={c.platform}>
                        <td>{c.platform}</td>
                        <td className={`platform-status-${c.status}`}>{c.status}</td>
                    </tr>  
                        ))}
                    
                    </tbody>
                </table>
            </section>
        </main>
    )
}