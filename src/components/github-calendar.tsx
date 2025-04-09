"use client";
import GitHubCalendar from "react-github-calendar";
import { Heading } from "./headingnew";

export function GithubCalendar() {
  return (
    <>
      <Heading>Commits</Heading>
      <GitHubCalendar
        username="isaqu3d"
        year={new Date().getFullYear()}
        color="#cd5ff8"
        hideColorLegend
        fontSize={18}
        blockSize={14}
        blockMargin={5}
      />
    </>
  );
}
