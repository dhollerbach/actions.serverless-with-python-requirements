import { Paginator } from "@smithy/types";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetDeployments: (config: APIGatewayPaginationConfiguration, input: GetDeploymentsCommandInput, ...rest: any[]) => Paginator<GetDeploymentsCommandOutput>;
