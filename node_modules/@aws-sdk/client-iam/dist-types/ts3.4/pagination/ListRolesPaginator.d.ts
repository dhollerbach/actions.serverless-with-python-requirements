import { Paginator } from "@smithy/types";
import {
  ListRolesCommandInput,
  ListRolesCommandOutput,
} from "../commands/ListRolesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListRoles: (
  config: IAMPaginationConfiguration,
  input: ListRolesCommandInput,
  ...rest: any[]
) => Paginator<ListRolesCommandOutput>;
