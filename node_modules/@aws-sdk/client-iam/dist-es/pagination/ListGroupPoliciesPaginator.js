import { createPaginator } from "@smithy/core";
import { ListGroupPoliciesCommand, } from "../commands/ListGroupPoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListGroupPolicies = createPaginator(IAMClient, ListGroupPoliciesCommand, "Marker", "Marker", "MaxItems");
