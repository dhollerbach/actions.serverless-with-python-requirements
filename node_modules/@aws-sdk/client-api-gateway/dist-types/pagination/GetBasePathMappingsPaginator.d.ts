import { Paginator } from "@smithy/types";
import { GetBasePathMappingsCommandInput, GetBasePathMappingsCommandOutput } from "../commands/GetBasePathMappingsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetBasePathMappings: (config: APIGatewayPaginationConfiguration, input: GetBasePathMappingsCommandInput, ...rest: any[]) => Paginator<GetBasePathMappingsCommandOutput>;
