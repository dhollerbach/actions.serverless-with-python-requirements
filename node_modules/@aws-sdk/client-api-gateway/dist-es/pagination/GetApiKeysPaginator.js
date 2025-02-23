import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetApiKeysCommand } from "../commands/GetApiKeysCommand";
export const paginateGetApiKeys = createPaginator(APIGatewayClient, GetApiKeysCommand, "position", "position", "limit");
