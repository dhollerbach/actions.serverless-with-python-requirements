import { Paginator } from "@smithy/types";
import { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput } from "../commands/GetUsagePlanKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetUsagePlanKeys: (config: APIGatewayPaginationConfiguration, input: GetUsagePlanKeysCommandInput, ...rest: any[]) => Paginator<GetUsagePlanKeysCommandOutput>;
