import { createPaginator } from "@smithy/core";
import { CloudFormationClient } from "../CloudFormationClient";
import { ListStackRefactorsCommand, } from "../commands/ListStackRefactorsCommand";
export const paginateListStackRefactors = createPaginator(CloudFormationClient, ListStackRefactorsCommand, "NextToken", "NextToken", "MaxResults");
