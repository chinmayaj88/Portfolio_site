export default function About() {
  return (
    <main style={{ padding: "40px" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "30px",
            color: "rgb(47, 47, 47)",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          About & Contact
        </h1>
        
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "rgb(47, 47, 47)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgb(47, 47, 47)",
              opacity: 0.7,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Add your bio, background, experience, and design philosophy here.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "rgb(47, 47, 47)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgb(47, 47, 47)",
              opacity: 0.7,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Email: <strong>akshayshetty61@gmail.com</strong>
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgb(47, 47, 47)",
              opacity: 0.7,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Feel free to reach out for collaborations or inquiries.
          </p>
        </section>
      </div>
    </main>
  );
}
