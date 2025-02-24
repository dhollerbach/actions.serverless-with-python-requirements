import { Paginator } from "@smithy/types";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListPolicies: (config: IAMPaginationConfiguration, input: ListPoliciesCommandInput, ...rest: any[]) => Paginator<ListPoliciesCommandOutput>;
