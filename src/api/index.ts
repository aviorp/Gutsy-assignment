import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
});

enum Level {
  rookie = "rookie",
  amateur = "amateur",
  pro = "pro"
}

export type Player = {
  id: number;
  name: string;
  level: Level;
  score: number;
  suspect: boolean;
};

type GetPlayersRequestParams = [string, { start: number; n: number }];

export const getPlayers = async ({ queryKey }: any) => {
  const [_key, params] = queryKey as GetPlayersRequestParams;
  const { data, headers } = await instance.get("/players", {
    params
  });

  return {
    players: data as Player[],
    count: parseInt(headers["x-total"])
  };
};

export const getSuspects = async () => {
  const { data } = await instance.get("/players/suspects");
  return data;
};
