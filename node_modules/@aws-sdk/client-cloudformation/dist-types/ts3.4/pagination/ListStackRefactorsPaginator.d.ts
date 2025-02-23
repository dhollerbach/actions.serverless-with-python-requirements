import { Paginator } from "@smithy/types";
import {
  ListStackRefactorsCommandInput,
  ListStackRefactorsCommandOutput,
} from "../commands/ListStackRefactorsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
export declare const paginateListStackRefactors: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackRefactorsCommandInput,
  ...rest: any[]
) => Paginator<ListStackRefactorsCommandOutput>;
