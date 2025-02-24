import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetUsageCommand } from "../commands/GetUsageCommand";
export const paginateGetUsage = createPaginator(APIGatewayClient, GetUsageCommand, "position", "position", "limit");
