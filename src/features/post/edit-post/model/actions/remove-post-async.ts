import { API_URL_POST } from "../../../../../app/constant/api";
import { request } from "../../../../../utils/request.util";

export const removePostAsync =
	(id: string | number) => () =>
		request(`${API_URL_POST}/${id}`, 'DELETE')
