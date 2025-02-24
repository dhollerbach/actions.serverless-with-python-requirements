import { createPaginator } from "@smithy/core";
import { ListEntitiesForPolicyCommand, } from "../commands/ListEntitiesForPolicyCommand";
import { IAMClient } from "../IAMClient";
export const paginateListEntitiesForPolicy = createPaginator(IAMClient, ListEntitiesForPolicyCommand, "Marker", "Marker", "MaxItems");
