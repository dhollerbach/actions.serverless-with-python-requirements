import { createPaginator } from "@smithy/core";
import { ListUserPoliciesCommand, } from "../commands/ListUserPoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListUserPolicies = createPaginator(IAMClient, ListUserPoliciesCommand, "Marker", "Marker", "MaxItems");
