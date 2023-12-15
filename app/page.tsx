"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import { Main } from "../remotion/MyComp/Main";
import { New } from "../remotion/TestComp/New";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import {
  TEST_DURATION_IN_FRAMES,
   defaultTestCompProps,
  TEST_VIDEO_FPS,
  TEST_VIDEO_HEIGHT,
  TEST_VIDEO_WIDTH,
  TestCompositionProps
} from "../types/testConstants"
 import { z } from "zod";
import { RenderControls } from "../components/RenderControls";
 import { Spacing } from "../components/Spacing";
 
const container: React.CSSProperties = {
  maxWidth: 768,
  margin: "auto",
  marginBottom: 20,
};

const outer: React.CSSProperties = {
  borderRadius: "var(--geist-border-radius)",
  overflow: "hidden",
  boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
  marginBottom: 40,
  marginTop: 60,
};

const player: React.CSSProperties = {
  width: "100%",
};

const Home: NextPage = () => {
  const [text, setText] = useState<string>(defaultMyCompProps.title);
  const [testText, setTestText] = useState<string>(defaultTestCompProps.title);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
      };
  }, [text]);
  const inputTestProps: z.infer<typeof TestCompositionProps> = useMemo(() => {
    return {
      title: testText,
      color:testText
     };
  }, [text]);

  return (
    <div>
      <div style={container}>
        <div className="cinematics" style={outer}>
          <Player
            component={New}
            inputProps={inputTestProps}
            durationInFrames={TEST_DURATION_IN_FRAMES}
            fps={TEST_VIDEO_FPS}
            compositionHeight={TEST_VIDEO_HEIGHT}
            compositionWidth={TEST_VIDEO_WIDTH}
            style={player}
            controls
            autoPlay
            loop
          />
          <Player
            component={Main}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={player}
            controls
            autoPlay
            loop
          />
        </div>
        <RenderControls
          text={text}
           setText={setText}
          inputProps={inputProps}
        ></RenderControls>
          
        <Spacing></Spacing>
        <Spacing></Spacing>
        <Spacing></Spacing>
        <Spacing></Spacing>
       </div>
    </div>
  );
};

export default Home;
