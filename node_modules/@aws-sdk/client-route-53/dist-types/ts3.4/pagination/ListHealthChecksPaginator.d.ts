import { Paginator } from "@smithy/types";
import {
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "../commands/ListHealthChecksCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
export declare const paginateListHealthChecks: (
  config: Route53PaginationConfiguration,
  input: ListHealthChecksCommandInput,
  ...rest: any[]
) => Paginator<ListHealthChecksCommandOutput>;
