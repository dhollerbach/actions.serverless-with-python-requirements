import { Paginator } from "@smithy/types";
import {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "../commands/ListAttachedRolePoliciesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListAttachedRolePolicies: (
  config: IAMPaginationConfiguration,
  input: ListAttachedRolePoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedRolePoliciesCommandOutput>;
