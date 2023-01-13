import TypewriterComponent from "typewriter-effect";

export function Typewriter() {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "< Olá, Seja bem-vindo ao meu portfolio",
          "< Entusiasta da tecnologia",
          "< Sou Desenvolvedor Web e Mobile",
          "< Front-end Junior",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 15,
        delay: 45,
        cursor: " />",
      }}
    />
  );
}
