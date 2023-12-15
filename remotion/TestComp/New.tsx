import { z } from "zod";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { TestCompositionProps } from "../../types/testConstants";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";
import { TextFade } from "./TextFade";
import Twitter from "../MyComp/Twitter";
import StarImg from "./stars.png";
import Starsbg from "./starsbg.png";
import { Rings } from "./Rings";

loadFont();
const container: React.CSSProperties = {
  background: "#001E47",
  position: "relative",
};

export const New = ({ title, color }: z.infer<typeof TestCompositionProps>) => {
  const { fps } = useVideoConfig();

  const transitionStart = 2 * fps;
  const transitionDuration = 1 * fps;

  return (
    <AbsoluteFill style={container}>
      <Sequence>
        <Rings></Rings>
      </Sequence>
      <Sequence durationInFrames={transitionStart + transitionDuration}>
        <TextFade>
          <Twitter />
        </TextFade>
      </Sequence>
    </AbsoluteFill>
  );
};
