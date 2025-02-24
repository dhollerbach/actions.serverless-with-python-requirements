import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetRestApisCommand } from "../commands/GetRestApisCommand";
export const paginateGetRestApis = createPaginator(APIGatewayClient, GetRestApisCommand, "position", "position", "limit");
