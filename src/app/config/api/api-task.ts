export enum API_TASK {
  // GET LIST TASK
  TASKS = "/task",
}
export const API_TASK_DETAIL = (id: string): string => `/task/${id}`;
