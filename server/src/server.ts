import dotenv from "dotenv";  // ✅ Import dotenv at the top
dotenv.config();               // ✅ Load environment variables

import app from "./app";

const PORT = process.env.PORT || 5000;
const API_BASE_URL = process.env.API_BASE_URL;  // ✅ Get API_BASE_URL

console.log("API_BASE_URL in service:", API_BASE_URL);  // ✅ Debugging

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
