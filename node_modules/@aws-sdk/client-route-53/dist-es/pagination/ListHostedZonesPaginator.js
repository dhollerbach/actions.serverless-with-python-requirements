import { createPaginator } from "@smithy/core";
import { ListHostedZonesCommand, } from "../commands/ListHostedZonesCommand";
import { Route53Client } from "../Route53Client";
export const paginateListHostedZones = createPaginator(Route53Client, ListHostedZonesCommand, "Marker", "NextMarker", "MaxItems");
