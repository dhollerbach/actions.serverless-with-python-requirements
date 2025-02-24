import { createPaginator } from "@smithy/core";
import { ListHealthChecksCommand, } from "../commands/ListHealthChecksCommand";
import { Route53Client } from "../Route53Client";
export const paginateListHealthChecks = createPaginator(Route53Client, ListHealthChecksCommand, "Marker", "NextMarker", "MaxItems");
