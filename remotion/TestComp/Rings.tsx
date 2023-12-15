import React from "react";
import { AbsoluteFill, Img, interpolateColors, useVideoConfig } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import Stars from "./stars.png";
import { WipeDirection } from "@remotion/transitions/wipe";

export const Rings: React.FC<{
  outProgress: number;
}> = ({ outProgress }) => {
  const scale = 1 / (1 - outProgress);
  const { height } = useVideoConfig();
  const wipeDirection: WipeDirection = "from-left";

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        position: "absolute",
      }}
    >
      <div>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={90}>
            <Img src={Stars} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={slide()}
            timing={linearTiming({ durationInFrames: 90 })}
          />
          <TransitionSeries.Sequence durationInFrames={90}>
            <Img src={Stars} />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </div>
    </AbsoluteFill>
  );
};
