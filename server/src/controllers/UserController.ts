import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class UserController implements Crud {
  constructor(private readonly citi = new Citi("User")) { }
  create = async (request: Request, response: Response) => {
    const { username, email, matchs } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      username,
      email,
      matchs
    );
    if (isAnyUndefined) return response.status(400).send();

    const newUser = { username, email, matchs };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newUser);

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  getById = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { httpStatus, values } = await this.citi.getAll();

    const valueToReturn = values.filter(value => value.id === Number(id))[0]

    return response.status(httpStatus).send(valueToReturn);
  }

  getByUsername = async (request: Request, response: Response) => {
    const { username } = request.params;
    const { httpStatus, values } = await this.citi.getAll();

    const valueToReturn = values.filter(value => value.username === username)[0]

    return response.status(httpStatus).send(valueToReturn);
  }

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { username, email, matchs } = request.body;

    const updatedValues = { username, email, matchs };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new UserController();
