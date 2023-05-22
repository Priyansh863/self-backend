import env from "../../env.json";

export default function () {
console.log("env1", process.env.NODE_ENV);
let node_env = process.env.NODE_ENV || "local";
return env[node_env];
};