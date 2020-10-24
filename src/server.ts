import { Application } from "https://deno.land/x/oak/mod.ts";

import { router } from "./routes.ts";
import { startDB } from "./app/database/start.ts";

await startDB();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 4444 });
