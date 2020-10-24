
import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run --allow-net --allow-read --allow-write src/server.ts",
      desc: "run my server.ts file",
    },

  },
  watch: true,
  watcher: {
    match: ["**/*.*"]
  }
};

export default config;