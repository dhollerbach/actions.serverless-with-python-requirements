import { Paginator } from "@smithy/types";
import { ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput } from "../commands/ListAttachedGroupPoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListAttachedGroupPolicies: (config: IAMPaginationConfiguration, input: ListAttachedGroupPoliciesCommandInput, ...rest: any[]) => Paginator<ListAttachedGroupPoliciesCommandOutput>;
