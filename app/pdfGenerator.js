
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default function downloadPDF(mobileNumber, data, summary) {
    const doc = new jsPDF();

    // PDF heading
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Account Check Report", 14, 20);

    // Mobile number
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Mobile Number: ${mobileNumber}`, 14, 30);

    // Combined platforms
    const rows = [
        ...data.socialMediaCategory.map(p => [
            p.platform, "Social Media", p.status
        ]),
        ...data.eCommerceCategory.map(p => [
            p.platform, "E-commerce", p.status
        ]),
        ...data.foodDeliveryCategory.map(p => [
            p.platform, "Food Delivery", p.status
        ]),
        ...data.travelCategory.map(p => [
            p.platform, "Travel", p.status
        ])
    ];

    // Summary
    doc.setFont("helvetica", "bold");
    doc.text("Overall Summary", 14, 42);

    doc.setFont("helvetica", "normal");
    doc.text(`Registered: ${summary.registered}`, 14, 50);
    doc.text(`Not Registered: ${summary.notRegistered}`, 75, 50);
    doc.text(`Check Failed: ${summary.failed}`, 145, 50);
    doc.text(`Total Platforms: ${summary.total}`, 14, 58);

    // Generate table
    autoTable(doc, {
        startY: 66,
        head: [["Platform", "Category", "Status"]],
        body: rows,
        theme: "grid",
        styles: {
            fontSize: 10,
            cellPadding: 4
        },
        headStyles: {
            fillColor: [80, 80, 240],
            textColor: [255, 255, 255]
        }
    });

    // Download
    doc.save("account-check-report.pdf");
}
