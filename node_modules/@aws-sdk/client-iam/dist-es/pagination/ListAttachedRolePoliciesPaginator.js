import { createPaginator } from "@smithy/core";
import { ListAttachedRolePoliciesCommand, } from "../commands/ListAttachedRolePoliciesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListAttachedRolePolicies = createPaginator(IAMClient, ListAttachedRolePoliciesCommand, "Marker", "Marker", "MaxItems");
