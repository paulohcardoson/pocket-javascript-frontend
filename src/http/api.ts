export interface ApiPathResponse<T extends object> {
	response: Response;
	data: T;
}

export class ApiHandler {
	baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async get<T extends object>(path: string): Promise<ApiPathResponse<T>> {
		const url = new URL(path, this.baseUrl);

		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = (await this.getDataAsJson(response)) as T;

		return {
			response,
			data,
		};
	}

	async post<T extends object>(
		path: string,
		body?: object,
	): Promise<ApiPathResponse<T>> {
		const url = new URL(path, this.baseUrl);

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : undefined,
		});

		const data = (await this.getDataAsJson(response)) as T;

		return {
			response,
			data,
		};
	}

	private async getDataAsJson(response: Response): Promise<object> {
		const text = await response.text();

		if (text.length === 0) return {};

		const json = JSON.parse(text);

		return json;
	}
}

export const apiHandler = new ApiHandler(import.meta.env.VITE_API_BASE_URL);
