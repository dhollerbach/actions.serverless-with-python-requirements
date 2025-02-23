import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetDomainNamesCommand, } from "../commands/GetDomainNamesCommand";
export const paginateGetDomainNames = createPaginator(APIGatewayClient, GetDomainNamesCommand, "position", "position", "limit");
