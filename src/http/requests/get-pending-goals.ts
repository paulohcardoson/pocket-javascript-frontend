import { apiHandler } from "../api";

export interface GetPendingGoalsResponse {
	pendingGoals: {
		id: string;
		title: string;
		desiredWeeklyFrequency: number;
		completionCount: number;
	}[];
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
	const { data } =
		await apiHandler.get<GetPendingGoalsResponse>("/pending-goals");

	return data;
}
