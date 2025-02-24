import { Paginator } from "@smithy/types";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "../commands/ListOpenIDConnectProviderTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListOpenIDConnectProviderTags: (
  config: IAMPaginationConfiguration,
  input: ListOpenIDConnectProviderTagsCommandInput,
  ...rest: any[]
) => Paginator<ListOpenIDConnectProviderTagsCommandOutput>;
