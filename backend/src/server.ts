import { app } from "./app";

app.listen(process.env.PORT || 3333, () => {
  console.log(`Running in port ${process.env.PORT}`);
})