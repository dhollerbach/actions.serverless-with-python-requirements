import { Paginator } from "@smithy/types";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "../commands/GetResourcesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetResources: (config: APIGatewayPaginationConfiguration, input: GetResourcesCommandInput, ...rest: any[]) => Paginator<GetResourcesCommandOutput>;
