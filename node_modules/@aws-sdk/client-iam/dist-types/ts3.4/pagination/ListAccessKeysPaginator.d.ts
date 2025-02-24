import { Paginator } from "@smithy/types";
import {
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "../commands/ListAccessKeysCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListAccessKeys: (
  config: IAMPaginationConfiguration,
  input: ListAccessKeysCommandInput,
  ...rest: any[]
) => Paginator<ListAccessKeysCommandOutput>;
