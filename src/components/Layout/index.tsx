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

      <main className="flex justify-center pt-[90px] min-h-screen ">
        {children}
      </main>

      <Footer />
    </div>
  );
}
