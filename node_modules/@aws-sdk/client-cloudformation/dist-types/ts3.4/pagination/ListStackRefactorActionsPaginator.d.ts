import { Paginator } from "@smithy/types";
import {
  ListStackRefactorActionsCommandInput,
  ListStackRefactorActionsCommandOutput,
} from "../commands/ListStackRefactorActionsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
export declare const paginateListStackRefactorActions: (
  config: CloudFormationPaginationConfiguration,
  input: ListStackRefactorActionsCommandInput,
  ...rest: any[]
) => Paginator<ListStackRefactorActionsCommandOutput>;
