import { Paginator } from "@smithy/types";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetVpcLinks: (config: APIGatewayPaginationConfiguration, input: GetVpcLinksCommandInput, ...rest: any[]) => Paginator<GetVpcLinksCommandOutput>;
