function getLetterContent(companyName) {
  return `
                <div class="letter-header">
                    <h2>Himanshu Kushwaha</h2>
                    <p><strong>Full Stack Developer</strong></p>
                    <p>14 Avenue, Gaur City 2, Noida, India</p>
                    <p>Email: webdevkush23@gmail.com | Phone: +91-9811332794</p>
                    <p>LinkedIn: linkedin.com/in/himanshu-kushwaha-84a348b4</p>
                    <p>GitHub: github.com/Web-Dev-Kush</p>
                </div>

                <p class="date">Date: ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "2-digit" })}</p>

                <div class="recipient">
                    <p><strong>Hiring Manager</strong></p>
                    <p><strong>${companyName}</strong></p>
                </div>

                <p><strong>Dear Hiring Manager,</strong></p>

                <p class="body-text">
                    I am writing to express my interest in the Full Stack Developer position at ${companyName}. With 6+ years of hands-on experience building scalable, high-performance applications using Next.js, React.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, and AWS, I am confident in my ability to contribute effectively to ${companyName}'s engineering team and deliver impactful digital solutions for global clients.
                </p>

                <p class="body-text">
                    In my recent role at XtendedSpace Technology, I led end-to-end development of enterprise-grade applications across finance, CRM, and storage-management domains. I have built secure REST APIs, architected scalable backend systems, and delivered responsive and intuitive frontends using modern frameworks. I actively collaborated with cross-functional teams, contributed to solution design, optimized performance, and implemented CI/CD, logging, authentication, and cloud deployments using Docker, AWS, GitHub Actions, and microservices.
                </p>

                <p class="body-text">
                    Some highlights aligned with ${companyName}'s full-stack engineering expectations:
                </p>

                <div class="highlights">
                    <p>• Developed full CRM, financial advisory platforms, and large-scale storage systems using Next.js, React, Tailwind, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB.</p>
                    
                    <p>• Built production-ready APIs and backend services, including authentication flows, RBAC, input validation, error handling, and performance optimizations.</p>
                    
                    <p>• Implemented microservices in Golang for compute-heavy tasks and improved distributed system throughput.</p>
                    
                    <p>• Deployed and monitored cloud infrastructure on AWS (EC2, Amplify, S3, RDS, CloudWatch), ensuring high availability and automation.</p>
                    
                    <p>• Worked in Agile environments, performing code reviews, mentoring junior developers, collaborating with product teams, and ensuring timely delivery.</p>
                </div>

                <p class="body-text">
                    I am particularly drawn to ${companyName}'s reputation for innovation and large-scale digital transformation projects. I am confident that my technical expertise, problem-solving abilities, and strong ownership mindset will enable me to contribute effectively to your engineering initiatives.
                </p>

                <p class="body-text">
                    I would welcome the opportunity to discuss how my technical background and project experience align with ${companyName}'s requirements. Thank you for considering my application. I look forward to the possibility of contributing to your team.
                </p>

                <div class="signature">
                    <p><strong>Warm regards,</strong></p>
                    <p><strong>Himanshu Kushwaha</strong></p>
                </div>
            `;
}

function togglePreview() {
  const preview = document.getElementById("preview");
  const companyName =
    document.getElementById("companyName").value.trim() || "Wipro Ltd.";

  if (preview.classList.contains("show")) {
    preview.classList.remove("show");
  } else {
    document.getElementById("letterContent").innerHTML =
      getLetterContent(companyName);
    preview.classList.add("show");
    preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function generatePDF() {
  const companyName =
    document.getElementById("companyName").value.trim() || "Wipro Ltd.";
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let y = margin;

  // Header
  doc.setFontSize(16);
  doc.setFont(undefined, "bold");
  doc.text("Himanshu Kushwaha", margin, y);
  y += 7;

  doc.setFontSize(11);
  doc.setFont(undefined, "normal");
  doc.text("Full Stack Developer", margin, y);
  y += 6;

  doc.setFontSize(9);
  doc.text("14 Avenue, Gaur City 2, Noida, India", margin, y);
  y += 5;
  doc.text("Email: webdevkush23@gmail.com | Phone: +91-9811332794", margin, y);
  y += 5;
  doc.text("LinkedIn: linkedin.com/in/himanshu-kushwaha-84a348b4", margin, y);
  y += 5;
  doc.text("GitHub: github.com/Web-Dev-Kush", margin, y);
  y += 10;

  // Date
  doc.setFont(undefined, "italic");
  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  doc.text(`Date: ${dateStr}`, margin, y);
  y += 10;

  // Recipient
  doc.setFont(undefined, "bold");
  doc.text("Hiring Manager", margin, y);
  y += 5;
  doc.text(companyName, margin, y);
  y += 10;

  // Salutation
  doc.text("Dear Hiring Manager,", margin, y);
  y += 8;

  // Body paragraphs
  doc.setFont(undefined, "normal");
  doc.setFontSize(10);

  const paragraphs = [
    `I am writing to express my interest in the Full Stack Developer position at ${companyName}. With 6+ years of hands-on experience building scalable, high-performance applications using Next.js, React.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, and AWS, I am confident in my ability to contribute effectively to ${companyName}'s engineering team and deliver impactful digital solutions for global clients.`,

    `In my recent role at XtendedSpace Technology, I led end-to-end development of enterprise-grade applications across finance, CRM, and storage-management domains. I have built secure REST APIs, architected scalable backend systems, and delivered responsive and intuitive frontends using modern frameworks. I actively collaborated with cross-functional teams, contributed to solution design, optimized performance, and implemented CI/CD, logging, authentication, and cloud deployments using Docker, AWS, GitHub Actions, and microservices.`,

    `Some highlights aligned with ${companyName}'s full-stack engineering expectations:`,
  ];

  paragraphs.forEach((para) => {
    const lines = doc.splitTextToSize(para, maxWidth);
    lines.forEach((line) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 5;
    });
    y += 3;
  });

  // Highlights
  const highlights = [
    "Developed full CRM, financial advisory platforms, and large-scale storage systems using Next.js, React, Tailwind, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB.",
    "Built production-ready APIs and backend services, including authentication flows, RBAC, input validation, error handling, and performance optimizations.",
    "Implemented microservices in Golang for compute-heavy tasks and improved distributed system throughput.",
    "Deployed and monitored cloud infrastructure on AWS (EC2, Amplify, S3, RDS, CloudWatch), ensuring high availability and automation.",
    "Worked in Agile environments, performing code reviews, mentoring junior developers, collaborating with product teams, and ensuring timely delivery.",
  ];

  highlights.forEach((highlight) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }

    // Bullet point
    doc.setFont(undefined, "bold");
    doc.text("•", margin + 3, y);

    // Text content
    doc.setFont(undefined, "normal");
    const lines = doc.splitTextToSize(highlight, maxWidth - 10);
    lines.forEach((line, idx) => {
      if (idx > 0 && y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin + 8, y);
      if (idx < lines.length - 1) y += 5;
    });
    y += 6;
  });

  y += 3;

  // Closing paragraphs
  const closingParas = [
    `I am particularly drawn to ${companyName}'s reputation for innovation and large-scale digital transformation projects. I am confident that my technical expertise, problem-solving abilities, and strong ownership mindset will enable me to contribute effectively to your engineering initiatives.`,

    `I would welcome the opportunity to discuss how my technical background and project experience align with ${companyName}'s requirements. Thank you for considering my application. I look forward to the possibility of contributing to your team.`,
  ];

  closingParas.forEach((para) => {
    const lines = doc.splitTextToSize(para, maxWidth);
    lines.forEach((line) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 5;
    });
    y += 3;
  });

  // Signature
  y += 5;
  doc.setFont(undefined, "bold");
  doc.text("Warm regards,", margin, y);
  y += 6;
  doc.text("Himanshu Kushwaha", margin, y);

  // Save PDF
  const fileName = `Cover_Letter_${companyName.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
  doc.save(fileName);
}

// Update preview on company name change
document.getElementById("companyName").addEventListener("input", function () {
  const preview = document.getElementById("preview");
  if (preview.classList.contains("show")) {
    document.getElementById("letterContent").innerHTML = getLetterContent(
      this.value.trim() || "Wipro Ltd.",
    );
  }
});
