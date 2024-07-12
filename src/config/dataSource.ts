import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../api/model/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "princy",
  database: "social",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
