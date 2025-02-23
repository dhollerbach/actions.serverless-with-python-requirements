import { createPaginator } from "@smithy/core";
import { ListCidrLocationsCommand, } from "../commands/ListCidrLocationsCommand";
import { Route53Client } from "../Route53Client";
export const paginateListCidrLocations = createPaginator(Route53Client, ListCidrLocationsCommand, "NextToken", "NextToken", "MaxResults");
