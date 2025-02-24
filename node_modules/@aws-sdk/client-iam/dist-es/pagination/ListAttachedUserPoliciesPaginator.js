import { createPaginator } from "@smithy/core";
import { ListAttachedUserPoliciesCommand, } from "../commands/ListAttachedUserPoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListAttachedUserPolicies = createPaginator(IAMClient, ListAttachedUserPoliciesCommand, "Marker", "Marker", "MaxItems");
