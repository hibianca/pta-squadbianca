//Obs: os códigos comentados são funcionalidades que estão tentando serem implementadas.

import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class MatchController implements Crud {
  constructor(private readonly citi = new Citi("Match")) {}
  create = async (request: Request, response: Response) => {
    const {
      date,
      hour,
      plataform,
      participants,
      vacancies,
      description,
      link,
    } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      date,
      hour,
      plataform,
      participants,
      vacancies,
      description,
      link
    );
    if (isAnyUndefined) return response.status(400).send();

    const newMatch = {
      date,
      hour,
      plataform,
      participants,
      vacancies,
      description,
      link,
    };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(
      newMatch
    );

    return response.status(httpStatus).send({ message });
  };

  getById = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { httpStatus, values } = await this.citi.getAll();

    const valueToReturn = values.filter((value) => value.id === Number(id))[0];

    return response.status(httpStatus).send(valueToReturn);
  };

  // essa função filtra as partidas  por plataforma
  getByPlataform = async (request: Request, response: Response) => {
    const { plataform } = request.params;

    const { httpStatus, values } = await this.citi.getAll();

    const valueReturnP = values.filter((value) => value.plataform == plataform);

    return response.status(httpStatus).send(valueReturnP);
  };

  // essa função filtra as partidas  por vagas
  getByVacancies = async (request: Request, response: Response) => {
    const { vacancies } = request.params;

    const { httpStatus, values } = await this.citi.getAll();

    const valueReturnV = values.filter(
      (value) => value.vacancies == Number(vacancies)
    );

    return response.status(httpStatus).send(valueReturnV);
  };

  //essa função filtra as partidas que estão com o status = "ABERTO"
  getByStatusOpen = async (response: Response) => {
    const nowDate = new Date();

    const todayStartDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      0,
      0,
      0
    );

    const todayEndDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      23,
      59,
      59
    );

    const { httpStatus, values } = await this.citi.getAll();

    const statusOpenReturn = values.filter((value) => {
      const [day, month, year] = value.date.split("/");

      const valueDate = new Date(`${month}/${day}/${year}`);

      return (
        valueDate >= todayStartDate &&
        Number(value.participants) < Number(value.vacancies)
      );
    });

    return response.status(httpStatus).send(statusOpenReturn);
  };
  //essa função filtra as partidas que estão com o status = "FECHADO"
  getByStatusClosed = async (response: Response) => {
    const nowDate = new Date();

    const todayStartDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      0,
      0,
      0
    );

    const todayEndDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      23,
      59,
      59
    );

    const { httpStatus, values } = await this.citi.getAll();

    const statusOpenReturn = values.filter((value) => {
      const [day, month, year] = value.date.split("/");

      const valueDate = new Date(`${month}/${day}/${year}`);

      return (
        valueDate < todayStartDate ||
        Number(value.participants) == Number(value.vacancies)
      );
    });

    return response.status(httpStatus).send(statusOpenReturn);
  };
  //essa função filtra as partidas que estão com o status = "ABERTO" da data inserida
  getByStatusOpenDate = async (request: Request, response: Response) => {
    const { date } = request.params;

    const nowDate = new Date();

    const todayStartDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      0,
      0,
      0
    );

    const todayEndDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      23,
      59,
      59
    );

    const { httpStatus, values } = await this.citi.getAll();

    const statusOpenDateReturn = values.filter((value) => {
      const [day, month, year] = value.date.split("/");

      const valueDate = new Date(`${month}/${day}/${year}`);

      return (
        valueDate >= todayStartDate &&
        Number(value.participants) < Number(value.vacancies) &&
        date === value.date
      );
    });

    if (statusOpenDateReturn.length > 0) {
      return response.status(httpStatus).send(statusOpenDateReturn);
    } else {
      return response.status(httpStatus).send("Não há partidas abertas");
    }
  };
  //essa função filtra as partidas que estão com o status = "FECHADO" da data inserida
  getByStatusClosedDate = async (request: Request, response: Response) => {
    const { date } = request.params;

    const nowDate = new Date();

    const todayStartDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      0,
      0,
      0
    );

    const todayEndDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      23,
      59,
      59
    );

    const { httpStatus, values } = await this.citi.getAll();

    const statusClosedDateReturn = values.filter((value) => {
      const [day, month, year] = value.date.split("/");

      const valueDate = new Date(`${month}/${day}/${year}`);

      return (
        valueDate < todayStartDate ||
        (Number(value.participants) == Number(value.vacancies) &&
          date === value.date)
      );
    });

    if (statusClosedDateReturn.length > 0) {
      return response.status(httpStatus).send(statusClosedDateReturn);
    } else {
      return response.status(httpStatus).send("Não há partidas fechadas");
    }
  };
  //essa função filtra as partidas que estão com o status = "FINALIZADA"
  getByStatusFinished = async (request: Request, response: Response) => {
    const nowDate = new Date();

    const todayStartDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      0,
      0,
      0
    );

    const todayEndDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      23,
      59,
      59
    );

    const { httpStatus, values } = await this.citi.getAll();

    const statusFinishedReturn = values.filter((value) => {
      const [day, month, year] = value.date.split("/");

      const valueDate = new Date(`${month}/${day}/${year}`);

      return valueDate < todayStartDate;
    });
    return response.status(httpStatus).send(statusFinishedReturn);
  };
  //essa função filtra as partidas que estão com o status = "FINALIZADAS" da data inserida (mostra historico)
  getByHistoric = async (request: Request, response: Response) => {
    const nowDate = new Date();

    const todayStartDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      0,
      0,
      0
    );

    const todayEndDate = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      nowDate.getDate(),
      23,
      59,
      59
    );

    const { httpStatus, values } = await this.citi.getAll();

    const historicReturn = values.filter((value) => {
      const [day, month, year] = value.date.split("/");

      const valueDate = new Date(`${month}/${day}/${year}`);

      return valueDate < todayStartDate;
    });

    if (historicReturn.length > 0) {
      return response.status(httpStatus).send(historicReturn);
    } else {
      return response.status(httpStatus).send("Não há partidas");
    }
  };
  // essa função filtra as partidas  pela data de hoje
  getByToday = async (request: Request, response: Response) => {
    const { date } = request.params;

    const nowdate = new Date();

    const day = String(nowdate.getDate()).padStart(2, "0");

    const month = String(nowdate.getMonth() + 1).padStart(2, "0");

    const year = nowdate.getFullYear();

    const newDateFormatted = `${day}/${month}/${year}`;

    const { httpStatus, values } = await this.citi.getAll();

    if (date === newDateFormatted) {
      console.log("Data de hoje:", newDateFormatted);
      const valueReturnD = values.filter(
        (value) => value.date === newDateFormatted
      );
      return response.status(httpStatus).send(valueReturnD);
    }
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { team1, team2, date } = request.body;

    const updatedValues = { team1, team2, date };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new MatchController();
