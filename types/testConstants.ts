import { z } from "zod";
import { zColor } from "@remotion/zod-types";

 export const TEST_COMP_NAME = "TestComp"


export const TestCompositionProps = z.object({
  title: z.string(),
  color:zColor()
});

export const defaultTestCompProps: z.infer<typeof TestCompositionProps> = {
  title: "Hello I am new test Composition",
  color:"rgb(104, 212, 21)"


};

export const TEST_DURATION_IN_FRAMES = 90;
export const TEST_VIDEO_WIDTH = 1280;
export const TEST_VIDEO_HEIGHT = 720;
export const TEST_VIDEO_FPS = 30;
