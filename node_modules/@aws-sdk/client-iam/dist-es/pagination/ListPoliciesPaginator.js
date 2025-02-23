import { createPaginator } from "@smithy/core";
import { ListPoliciesCommand, } from "../commands/ListPoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListPolicies = createPaginator(IAMClient, ListPoliciesCommand, "Marker", "Marker", "MaxItems");
