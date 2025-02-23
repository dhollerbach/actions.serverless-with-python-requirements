import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetModelsCommand } from "../commands/GetModelsCommand";
export const paginateGetModels = createPaginator(APIGatewayClient, GetModelsCommand, "position", "position", "limit");
