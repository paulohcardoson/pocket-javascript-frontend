import { apiHandler } from "../api";

export interface GetSummaryResponse {
	summary: {
		completed: number;
		total: number;
		goalsPerDay: Record<
			string,
			{
				id: string;
				title: string;
				createdAt: string;
			}[]
		>;
	};
}

export async function getSummary(): Promise<GetSummaryResponse> {
	const { data } = await apiHandler.get<GetSummaryResponse>("/summary");

	return data;
}
