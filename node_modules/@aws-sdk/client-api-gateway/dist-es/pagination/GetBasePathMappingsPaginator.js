import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetBasePathMappingsCommand, } from "../commands/GetBasePathMappingsCommand";
export const paginateGetBasePathMappings = createPaginator(APIGatewayClient, GetBasePathMappingsCommand, "position", "position", "limit");
