import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/workflow/actions/blueprints/exampleId/graph",
  headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
});
export default api;
