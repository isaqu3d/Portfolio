import useThemeData from "../../hook/useThemeData";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const { theme } = useThemeData();
  return (
    <div
      className={`${
        theme ? "bg-white-300 text-black" : " bg-gray-900 text-white-100"
      } `}
    >
      <Navbar />

      <main className="flex justify-center pt-[100px] min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
}
