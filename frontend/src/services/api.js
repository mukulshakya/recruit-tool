import axios from "axios";

const url = {
  LIVE: "",
  LOCAL: "http://localhost:8000/api",
};

const api = axios.create({ baseURL: url.LOCAL });

async function requestHandler(func, ...args) {
  try {
    const resp = await func(...args);
    if (!resp || !resp.data) throw new Error();
    return resp.data;
  } catch (e) {
    return {
      error:
        e.response && e.response.data ? e.response.data : "Unexpected error",
    };
  }
}

const func = {};

func.getCandidates = () => requestHandler(api.get, "/candidates");
func.createCandidate = (payload) =>
  requestHandler(api.post, "/candidates", payload);
func.updateCandidateStatus = (id, payload) =>
  requestHandler(api.put, `/candidates/${id}/status`, payload);

export default func;
