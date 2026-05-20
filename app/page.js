export default function Home() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "serif",
      background: "#f8f4ee",
      minHeight: "100vh",
      color: "#1f1b17"
    }}>
      <h1 style={{
        fontSize: "48px",
        marginBottom: "10px"
      }}>
        Ruben David Art
      </h1>

      <p style={{
        marginBottom: "50px",
        fontSize: "20px"
      }}>
        Art intuitif, peinture, lumière et transmissions visuelles.
      </p>

      <div style={{
        maxWidth: "900px"
      }}>
        <img
          src="public/transmissions.jpg"
          alt="Transmissions"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        <h2 style={{
          fontSize: "32px",
          marginBottom: "10px"
        }}>
          Transmissions
        </h2>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "700px"
        }}>
          Une œuvre née d’un état méditatif profond, autour de la mémoire,
          de la lumière et des transmissions invisibles.
        </p>

        <p style={{
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "bold"
        }}>
          Original disponible : 950€
        </p>
      </div>
    </main>
  );
}
