import apiClient from "@/services/ApiClient";
import type { ResponsesApiResponse } from "../types/ResponsesTypes";
 
export const getResponses = () => apiClient.get<ResponsesApiResponse>("/responses");