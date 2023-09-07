export default function Footer() {
  return (
    <footer>
      <div className="mt-4 h-[1px] w-full bg-gray-600" />
      <span className="flex items-center justify-center p-5 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Isaque de Sousa. Todos os direitos
        reservados.
      </span>
    </footer>
  );
}
