export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f6f1e8",
      color: "#1c1815",
      fontFamily: "Georgia, serif"
    }}>
      <section style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "70px 28px"
      }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "80px"
        }}>
          <div style={{ letterSpacing: "0.08em", fontSize: "15px" }}>
            RUBEN DAVID ART
          </div>
          <a href="mailto:ruben.sellem@gmail.com" style={{
            color: "#1c1815",
            textDecoration: "none",
            borderBottom: "1px solid #1c1815",
            paddingBottom: "3px"
          }}>
            Contact
          </a>
        </header>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "70px",
          alignItems: "center"
        }}>
          <div>
            <p style={{
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "12px",
              color: "#8a7460",
              marginBottom: "18px"
            }}>
              Œuvre originale disponible
            </p>

            <h1 style={{
              fontSize: "72px",
              lineHeight: "0.95",
              margin: "0 0 28px"
            }}>
              Transmissions
            </h1>

            <p style={{
              fontSize: "21px",
              lineHeight: "1.65",
              maxWidth: "560px",
              color: "#4d4138",
              marginBottom: "34px"
            }}>
              Une peinture née d’un état méditatif profond, entre mémoire,
              lumière, matière organique et traces d’écritures invisibles.
            </p>

            <p style={{
              fontSize: "28px",
              marginBottom: "28px"
            }}>
              Original · 990 €
            </p>

            <a href="mailto:ruben.sellem@gmail.com?subject=Demande%20pour%20Transmissions" style={{
              display: "inline-block",
              background: "#1c1815",
              color: "#f6f1e8",
              textDecoration: "none",
              padding: "16px 26px",
              borderRadius: "999px",
              fontSize: "16px"
            }}>
              Demander cette œuvre
            </a>
          </div>

          <div style={{
            background: "#efe5d7",
            padding: "18px",
            borderRadius: "24px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.12)"
          }}>
            <img
              src="/public/transmissions.jpg"
              alt="Transmissions"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "16px"
              }}
            />
          </div>
        </div>

        <section style={{
          marginTop: "100px",
          borderTop: "1px solid #d9cbb9",
          paddingTop: "40px",
          maxWidth: "760px"
        }}>
          <h2 style={{ fontSize: "32px", marginBottom: "18px" }}>
            À propos
          </h2>
          <p style={{
            fontSize: "19px",
            lineHeight: "1.8",
            color: "#4d4138"
          }}>
            Je crée des œuvres intuitives à partir de visions intérieures,
            de méditations profondes et de symboles qui émergent comme des
            fragments de mémoire. Chaque peinture est une tentative de rendre
            visible une présence, un passage, une transmission.
          </p>
        </section>
      </section>
    </main>
  );
}
