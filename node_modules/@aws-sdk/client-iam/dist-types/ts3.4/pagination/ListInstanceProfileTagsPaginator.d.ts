import { Paginator } from "@smithy/types";
import {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "../commands/ListInstanceProfileTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListInstanceProfileTags: (
  config: IAMPaginationConfiguration,
  input: ListInstanceProfileTagsCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceProfileTagsCommandOutput>;
