import useThemeData from "../../hook/useThemeData";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const { theme } = useThemeData();
  return (
    <div
      className={`${
        theme ? "bg-[#f0e7db] text-black" : " bg-[#202023] text-white-100"
      } `}
    >
      <Navbar />
      <main
        style={{
          paddingTop: "90px",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
