import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetVpcLinksCommand } from "../commands/GetVpcLinksCommand";
export const paginateGetVpcLinks = createPaginator(APIGatewayClient, GetVpcLinksCommand, "position", "position", "limit");
