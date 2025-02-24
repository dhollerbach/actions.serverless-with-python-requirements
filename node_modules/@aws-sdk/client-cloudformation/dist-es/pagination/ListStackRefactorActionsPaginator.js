import { createPaginator } from "@smithy/core";
import { CloudFormationClient } from "../CloudFormationClient";
import { ListStackRefactorActionsCommand, } from "../commands/ListStackRefactorActionsCommand";
export const paginateListStackRefactorActions = createPaginator(CloudFormationClient, ListStackRefactorActionsCommand, "NextToken", "NextToken", "MaxResults");
