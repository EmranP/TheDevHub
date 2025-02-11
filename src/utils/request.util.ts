export function request(url:string , method: string, data?: any) {
  return fetch(url, {
    headers: {
      'content-type': 'application/json'
    },
    method: method || 'GET',
    body: data ? JSON.stringify(data) : undefined,
    credentials: 'include',
  }).then(res => res.json())
}
