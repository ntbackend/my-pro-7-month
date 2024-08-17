import express from "express";
import modules from "./start/module.js";
import runner from "./start/run.js";

const app = express();

modules(app, express);
runner(app);
