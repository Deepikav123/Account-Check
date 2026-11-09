
export default function ResultTable({categoryData,title}) {
    return (
        <article className="result-card">
            <header>
                <h2 className="category">{title}</h2>
            </header>
            <section>
                <table>
                    <thead>
                    <tr >
                        <th >Platform</th>
                        <th >Category</th>
                        <th >Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {categoryData.map((c)=>(
                          <tr key={c.platform}>
                        <td>{c.platform}</td>
                        <td>{c.category}</td>
                        <td ><span className={`platform-status-${c.status}`}>{c.status}</span></td>
                    </tr>  
                        ))}
                    
                    </tbody>
                </table>
            </section>
        </article>
    )
}