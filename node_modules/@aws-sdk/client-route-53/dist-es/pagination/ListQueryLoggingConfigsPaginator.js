import { createPaginator } from "@smithy/core";
import { ListQueryLoggingConfigsCommand, } from "../commands/ListQueryLoggingConfigsCommand";
import { Route53Client } from "../Route53Client";
export const paginateListQueryLoggingConfigs = createPaginator(Route53Client, ListQueryLoggingConfigsCommand, "NextToken", "NextToken", "MaxResults");
