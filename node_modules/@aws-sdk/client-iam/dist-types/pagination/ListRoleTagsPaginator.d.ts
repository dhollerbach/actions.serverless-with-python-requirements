import { Paginator } from "@smithy/types";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "../commands/ListRoleTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListRoleTags: (config: IAMPaginationConfiguration, input: ListRoleTagsCommandInput, ...rest: any[]) => Paginator<ListRoleTagsCommandOutput>;
