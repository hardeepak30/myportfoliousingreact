import React from "react";

function Certificates() {
  const certificates = [
    {
      title: "JAVA APP DEVELOPMENT",
      issuer: "LPU",
      date: "October 2024",
      link: "https://drive.google.com/drive/folders/1cmb_wIiBq3vn_uaQPhQGc6fQAmoEEzfT?usp=drive_link",
      img: "https://cdn-icons-png.flaticon.com/512/942/942748.png", // New working icon
    },
    {
      title:"Server side JavaScript with Node.js",
      issuer: "CipherSchools",
      date: "July 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/HZ4LLRAXTUF8",
      img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "April 2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/E226LKKTSBBY",
      img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },
  ];

  return (
    <section id="certificates" style={{ padding: "2rem" }}>
      <center><h2 className="text-[50px] mb-8 font-bold text-accent">Certificates</h2></center>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "15px",
              padding: "1.5rem",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              backgroundColor: "#fff",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Certificate Icon */}
            <img 
              src={cert.img} 
              alt="certificate-icon" 
              style={{ width: "70px", height: "70px", marginBottom: "1rem" }}
            />

            {/* Certificate Info */}
            <h3 style={{ color:"black", fontSize: "22px", marginBottom: "0.5rem", fontWeight: "bold" }}>{cert.title}</h3>
            <p style={{ color:"black",margin: "0.3rem 0" }}>
              <strong>Issued by:</strong> {cert.issuer}
            </p>
            <p style={{ color:"black",margin: "0.3rem 0" }}>
              <strong>Date:</strong> {cert.date}
            </p>

            {/* Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "1rem",
                display: "inline-block",
                padding: "0.6rem 1.2rem",
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "30px",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
