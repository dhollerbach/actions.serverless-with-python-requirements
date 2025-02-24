import { Paginator } from "@smithy/types";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "../commands/ListUserPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListUserPolicies: (config: IAMPaginationConfiguration, input: ListUserPoliciesCommandInput, ...rest: any[]) => Paginator<ListUserPoliciesCommandOutput>;
