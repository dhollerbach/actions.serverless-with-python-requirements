import { Paginator } from "@smithy/types";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput,
} from "../commands/ListGroupsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListGroups: (
  config: IAMPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsCommandOutput>;
