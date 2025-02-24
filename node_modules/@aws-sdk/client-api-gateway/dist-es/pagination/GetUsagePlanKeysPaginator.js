import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetUsagePlanKeysCommand, } from "../commands/GetUsagePlanKeysCommand";
export const paginateGetUsagePlanKeys = createPaginator(APIGatewayClient, GetUsagePlanKeysCommand, "position", "position", "limit");
