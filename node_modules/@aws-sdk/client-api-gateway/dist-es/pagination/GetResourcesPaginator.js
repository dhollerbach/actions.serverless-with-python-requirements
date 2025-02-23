import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetResourcesCommand, } from "../commands/GetResourcesCommand";
export const paginateGetResources = createPaginator(APIGatewayClient, GetResourcesCommand, "position", "position", "limit");
