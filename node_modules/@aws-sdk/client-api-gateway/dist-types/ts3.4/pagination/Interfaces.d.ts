import { PaginationConfiguration } from "@smithy/types";
import { APIGatewayClient } from "../APIGatewayClient";
export interface APIGatewayPaginationConfiguration
  extends PaginationConfiguration {
  client: APIGatewayClient;
}
