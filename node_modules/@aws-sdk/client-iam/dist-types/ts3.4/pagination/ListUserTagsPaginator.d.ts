import { Paginator } from "@smithy/types";
import {
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "../commands/ListUserTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListUserTags: (
  config: IAMPaginationConfiguration,
  input: ListUserTagsCommandInput,
  ...rest: any[]
) => Paginator<ListUserTagsCommandOutput>;
