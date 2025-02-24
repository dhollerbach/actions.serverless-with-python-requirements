import { createPaginator } from "@smithy/core";
import { ListCidrBlocksCommand, } from "../commands/ListCidrBlocksCommand";
import { Route53Client } from "../Route53Client";
export const paginateListCidrBlocks = createPaginator(Route53Client, ListCidrBlocksCommand, "NextToken", "NextToken", "MaxResults");
