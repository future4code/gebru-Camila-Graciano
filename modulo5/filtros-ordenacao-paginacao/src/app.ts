import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server tá on na http://localhost:${address.port}`);
   } else {
      console.error(`O Server tá off.`);
   };
});

export default app;