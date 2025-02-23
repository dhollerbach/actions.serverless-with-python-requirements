import { Paginator } from "@smithy/types";
import {
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "../commands/ListAccountAliasesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListAccountAliases: (
  config: IAMPaginationConfiguration,
  input: ListAccountAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAccountAliasesCommandOutput>;
