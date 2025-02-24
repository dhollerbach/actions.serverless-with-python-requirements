import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetUsagePlansCommand, } from "../commands/GetUsagePlansCommand";
export const paginateGetUsagePlans = createPaginator(APIGatewayClient, GetUsagePlansCommand, "position", "position", "limit");
