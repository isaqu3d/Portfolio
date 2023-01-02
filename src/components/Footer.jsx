export default function Footer() {
  return (
    <div
      className={`flex items-center justify-center text-sm p-5 text-gray-300`}
      align="center"
      opacity={0.4}
      fontSize="sm"
      p={5}
    >
      &copy; {new Date().getFullYear()} Isaque de Sousa. Todos os direitos
      reservados.
    </div>
  );
}
