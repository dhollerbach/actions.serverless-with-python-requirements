import { Paginator } from "@smithy/types";
import { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "../commands/GetApiKeysCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetApiKeys: (config: APIGatewayPaginationConfiguration, input: GetApiKeysCommandInput, ...rest: any[]) => Paginator<GetApiKeysCommandOutput>;
