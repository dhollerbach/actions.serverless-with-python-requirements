import { createPaginator } from "@smithy/core";
import { ListRolePoliciesCommand, } from "../commands/ListRolePoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListRolePolicies = createPaginator(IAMClient, ListRolePoliciesCommand, "Marker", "Marker", "MaxItems");
