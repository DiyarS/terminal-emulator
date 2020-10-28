export const getRequest = (path, query) => {
  return handleRequest(fetch(prepareApiUrl(path, query)));
};

export const postRequest = (path, params, headers) => {
  return handleRequest(
    fetch(
      prepareApiUrl(path),
      generateRequestOptionsFor("POST", headers, params)
    )
  );
};

export const patchRequest = (path, params, headers) => {
  return handleRequest(
    fetch(
      prepareApiUrl(path),
      generateRequestOptionsFor("PATCH", headers, params)
    )
  );
};

export const putRequest = (path, params, headers) => {
  return handleRequest(
    fetch(
      prepareApiUrl(path),
      generateRequestOptionsFor("PUT", headers, params)
    )
  );
};

export const deleteRequest = (path, params, headers) => {
  return handleRequest(
    fetch(
      prepareApiUrl(path),
      generateRequestOptionsFor("DELETE", headers, params)
    )
  );
};

const handleRequest = (request) => {
  return request.then((response) => handleResponse(response));
};

const handleResponse = (response) => {
  return new Promise(async (resolve, reject) => {
    if (response.status >= 200 && response.status < 300) {
      const body = await response.json();
      resolve({ status: response.status, result: body.express });
    } else {
      reject({ status: response.status, response });
    }
  });
};

const generateRequestOptionsFor = (
  method = "POST",
  headers = {},
  params = {}
) => ({
  method,
  headers: Object.assign(
    {
      "content-type": "application/json",
    },
    headers
  ),
  body: JSON.stringify(params),
});

const prepareApiUrl = (path, query = {}) => {
  return `http://localhost:5000/api/${path}/${convertJsonToQueryString(query)}`;
};

const convertJsonToQueryString = (query) => {
  let q = [];
  for (let key in query) {
    if (query[key] || (key === "q" && query[key] === "")) {
      if (Array.isArray(query[key])) {
        q = q.concat(query[key].map((f) => `${key}=${f}`));
      } else {
        q = q.concat(`${key}=${query[key]}`);
      }
    }
  }

  const string = q.join("&");

  return string ? `?${string}` : string;
};
