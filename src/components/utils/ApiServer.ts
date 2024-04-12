import HttpResponse from "../user/dto/HttpReponse";

class ApiServer{

 api<U, T>(path: string, method: string, body: U, token: string): Promise<HttpResponse<T>> {
  const url = "http://localhost:5000/server" + path;
  const options: RequestInit = {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*",
      Authorization: `Bearer ${token}`,
    },
    body: body == null ? null : JSON.stringify(body),
  };
  return fetch(url, options);
}
}

export default ApiServer;