import { Paginator } from "@smithy/types";
import {
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "../commands/ListRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListRolePolicies: (
  config: IAMPaginationConfiguration,
  input: ListRolePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListRolePoliciesCommandOutput>;
