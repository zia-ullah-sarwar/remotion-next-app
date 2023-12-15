import { z } from "zod";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CompositionProps } from "../../types/constants";
import { NextLogo } from "./NextLogo";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";
import { Rings } from "./Rings";
import { TextFade } from "./TextFade";
import Twitter from "./Twitter";
import "./Twitter.css"
 
loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",

};

const logo: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
};

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const transitionStart = 0 * fps;
  const transitionDuration = 1 * fps;
  const logoOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: transitionDuration,
    delay: transitionStart,
  });

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize: 70 };
  }, []);

  return (
    <>
    <AbsoluteFill className="bg-gradient-kye-meh">
      <Sequence from={transitionStart + transitionDuration}>
        <TextFade>
          <Twitter />
        </TextFade>
      </Sequence>     
    </AbsoluteFill>
    </>
    
  );
};
