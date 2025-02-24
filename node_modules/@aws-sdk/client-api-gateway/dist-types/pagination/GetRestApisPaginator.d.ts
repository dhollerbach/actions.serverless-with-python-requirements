import { Paginator } from "@smithy/types";
import { GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetRestApis: (config: APIGatewayPaginationConfiguration, input: GetRestApisCommandInput, ...rest: any[]) => Paginator<GetRestApisCommandOutput>;
