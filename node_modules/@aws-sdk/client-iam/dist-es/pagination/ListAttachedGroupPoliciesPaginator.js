import { createPaginator } from "@smithy/core";
import { ListAttachedGroupPoliciesCommand, } from "../commands/ListAttachedGroupPoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListAttachedGroupPolicies = createPaginator(IAMClient, ListAttachedGroupPoliciesCommand, "Marker", "Marker", "MaxItems");
