import { Paginator } from "@smithy/types";
import {
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "../commands/ListPolicyTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListPolicyTags: (
  config: IAMPaginationConfiguration,
  input: ListPolicyTagsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyTagsCommandOutput>;
