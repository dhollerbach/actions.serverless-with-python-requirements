import { createPaginator } from "@smithy/core";
import { APIGatewayClient } from "../APIGatewayClient";
import { GetDeploymentsCommand, } from "../commands/GetDeploymentsCommand";
export const paginateGetDeployments = createPaginator(APIGatewayClient, GetDeploymentsCommand, "position", "position", "limit");
