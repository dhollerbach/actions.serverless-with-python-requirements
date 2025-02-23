import { Paginator } from "@smithy/types";
import { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "../commands/ListHostedZonesCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListHostedZones: (config: Route53PaginationConfiguration, input: ListHostedZonesCommandInput, ...rest: any[]) => Paginator<ListHostedZonesCommandOutput>;
