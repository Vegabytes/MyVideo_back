import { config } from "dotenv";

config();

export default {
  ATLAS_URI: process.env.ATLAS_URI || "mongodb://127.0.0.1:27017",
  PORT: process.env.PORT || 3000,
};
