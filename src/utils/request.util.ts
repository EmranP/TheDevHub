export const request = <T>(url:string, method: string = 'GET', data?: T): Promise<T> => fetch(url, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: method,
  body: data ? JSON.stringify(data) : undefined
}).then(res => res.json())
