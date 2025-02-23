import { Paginator } from "@smithy/types";
import { ListStackRefactorActionsCommandInput, ListStackRefactorActionsCommandOutput } from "../commands/ListStackRefactorActionsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListStackRefactorActions: (config: CloudFormationPaginationConfiguration, input: ListStackRefactorActionsCommandInput, ...rest: any[]) => Paginator<ListStackRefactorActionsCommandOutput>;
