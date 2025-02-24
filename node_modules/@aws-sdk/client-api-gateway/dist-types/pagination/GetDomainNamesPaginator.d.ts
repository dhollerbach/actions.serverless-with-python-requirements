import { Paginator } from "@smithy/types";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "../commands/GetDomainNamesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetDomainNames: (config: APIGatewayPaginationConfiguration, input: GetDomainNamesCommandInput, ...rest: any[]) => Paginator<GetDomainNamesCommandOutput>;
