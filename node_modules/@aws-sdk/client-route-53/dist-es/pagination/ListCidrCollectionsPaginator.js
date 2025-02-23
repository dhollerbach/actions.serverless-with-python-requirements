import { createPaginator } from "@smithy/core";
import { ListCidrCollectionsCommand, } from "../commands/ListCidrCollectionsCommand";
import { Route53Client } from "../Route53Client";
export const paginateListCidrCollections = createPaginator(Route53Client, ListCidrCollectionsCommand, "NextToken", "NextToken", "MaxResults");
