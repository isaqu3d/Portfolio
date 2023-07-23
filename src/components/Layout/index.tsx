import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import useThemeData from "@hook/useThemeData";

export default function Layout({ children }) {
  const { theme } = useThemeData();
  return (
    <div
      className={`${
        theme ? "bg-white-300 text-black" : " bg-gray-900 text-white-100"
      } `}
    >
      <Navbar />

      <main className="flex min-h-screen justify-center pt-[100px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}
