import { Paginator } from "@smithy/types";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "../commands/ListPolicyVersionsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListPolicyVersions: (config: IAMPaginationConfiguration, input: ListPolicyVersionsCommandInput, ...rest: any[]) => Paginator<ListPolicyVersionsCommandOutput>;
