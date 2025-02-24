import { Paginator } from "@smithy/types";
import {
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput,
} from "../commands/ListCidrBlocksCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
export declare const paginateListCidrBlocks: (
  config: Route53PaginationConfiguration,
  input: ListCidrBlocksCommandInput,
  ...rest: any[]
) => Paginator<ListCidrBlocksCommandOutput>;
