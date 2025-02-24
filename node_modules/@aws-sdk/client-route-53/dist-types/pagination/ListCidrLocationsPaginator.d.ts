import { Paginator } from "@smithy/types";
import { ListCidrLocationsCommandInput, ListCidrLocationsCommandOutput } from "../commands/ListCidrLocationsCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListCidrLocations: (config: Route53PaginationConfiguration, input: ListCidrLocationsCommandInput, ...rest: any[]) => Paginator<ListCidrLocationsCommandOutput>;
