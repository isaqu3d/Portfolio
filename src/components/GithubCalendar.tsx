"use client";
import GitHubCalendar from "react-github-calendar";
import { Heading } from "./Heading";

export function GithubCalendar() {
  return (
    <>
      <Heading>Commits</Heading>
      <GitHubCalendar
        username="x-speedblack-x"
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
