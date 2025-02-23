import { Paginator } from "@smithy/types";
import {
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "../commands/ListCidrCollectionsCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
export declare const paginateListCidrCollections: (
  config: Route53PaginationConfiguration,
  input: ListCidrCollectionsCommandInput,
  ...rest: any[]
) => Paginator<ListCidrCollectionsCommandOutput>;
