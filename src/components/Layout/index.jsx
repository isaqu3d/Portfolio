import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        style={{
          paddingTop: "90px",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
