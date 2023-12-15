import { z } from "zod";
 export const COMP_NAME = "MyComp";
 

export const CompositionProps = z.object({
  title: z.string(),
 });

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Twitter SS Post Compositon",
   
};

export const DURATION_IN_FRAMES = 150;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 30;


