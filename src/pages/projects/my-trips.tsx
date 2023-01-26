import { ListItemProject } from "../../components/Projects/ListItemProject";

import { Motion } from "../../components/Motion";
import HeaderItemProject from "../../components/Projects/HeaderItemProject";
import ImageProject from "../../components/Projects/ImageProject";

export default function myTrips() {
  return (
    <div className="max-w-md px-4">
      <Motion>
        <HeaderItemProject
          title="My trips - Minhas viagens"
          badgeYear={2022}
          description="Seja bem-vindo ao projeto de todas minhas viagens e lugares que já fiz. Aqui você pode clicar nas localizaçoẽs e ver uma descrição e algumas imagens."
        />

        <ListItemProject
          url="https://isaque-my-trips.vercel.app/"
          urlGitHub="https://github.com/X-SpeedBlack-X/My-Trips"
          description="NextJS, TypeScript, Graphql, Styled-Component, Next-Seo, Leaflet, MapBox."
          target="_blank"
        />

        <ImageProject
          src="/project/my-trips-2.png"
          alt="Primeira imagem ddo projeto"
        />

        <ImageProject
          src="/project/my-trips-3.png"
          alt="Segunda imagem ddo projeto"
        />

        <ImageProject
          src="/project/my-trips-4.png"
          alt="Segunda imagem ddo projeto"
        />
        <ImageProject
          src="/project/my-trips-5.png"
          alt="Segunda imagem ddo projeto"
        />
      </Motion>
    </div>
  );
}
