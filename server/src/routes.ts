import express from "express";
import userController from "./controllers/UserController";
import matchController from "./controllers/MatchController";

const routes = express.Router();

// User Routes
routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.get("/user/getById", userController.getById);
routes.get("/user/getByUsername/:username", userController.getByUsername);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

// Match Routes
routes.post("/match", matchController.create);
routes.get("/match", matchController.get);
routes.get("/match/getById/:id", matchController.getById);
routes.get("/match/:plataform", matchController.getByPlataform);
routes.get("/match/getVacancies/:vacancies", matchController.getByVacancies);
routes.get("/match/getByToday/:date", matchController.getByToday);
routes.get("/match/getByStatusOpen", matchController.getByStatusOpen);
routes.get("/match/getByStatusClosed", matchController.getByStatusClosed);
routes.get("/match/getByStatusFinished", matchController.getByStatusFinished);
routes.get("/match/getByStatusOpenDate/:date", matchController.getByStatusOpenDate);
routes.get("/match/getByStatusClosedDate/:date", matchController.getByStatusClosedDate);
routes.get("/match/getByHistoric/:date", matchController.getByHistoric);
routes.delete("/match/:id", matchController.delete);
routes.patch("/match/:id", matchController.update);

export default routes;
