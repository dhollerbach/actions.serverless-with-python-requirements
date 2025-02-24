import { Paginator } from "@smithy/types";
import { ListSAMLProviderTagsCommandInput, ListSAMLProviderTagsCommandOutput } from "../commands/ListSAMLProviderTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListSAMLProviderTags: (config: IAMPaginationConfiguration, input: ListSAMLProviderTagsCommandInput, ...rest: any[]) => Paginator<ListSAMLProviderTagsCommandOutput>;
