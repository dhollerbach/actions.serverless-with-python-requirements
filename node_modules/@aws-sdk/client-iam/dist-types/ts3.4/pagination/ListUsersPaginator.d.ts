import { Paginator } from "@smithy/types";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput,
} from "../commands/ListUsersCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListUsers: (
  config: IAMPaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput>;
