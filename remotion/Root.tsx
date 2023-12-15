import { Composition } from "remotion";
import { Main } from "./MyComp/Main";
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import {
  TEST_COMP_NAME,
  TEST_DURATION_IN_FRAMES,
  TEST_VIDEO_FPS,
  TEST_VIDEO_HEIGHT,
  TEST_VIDEO_WIDTH,
  defaultTestCompProps,
} from "../types/testConstants";
import { New } from "./TestComp/New";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id={TEST_COMP_NAME}
        component={New}
        durationInFrames={TEST_DURATION_IN_FRAMES}
        height={TEST_VIDEO_HEIGHT}
        width={TEST_VIDEO_WIDTH}
        fps={TEST_VIDEO_FPS}
        defaultProps={defaultTestCompProps}
      />
    </>
  );
};
