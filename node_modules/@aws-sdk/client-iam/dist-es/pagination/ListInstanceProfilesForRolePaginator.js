import { createPaginator } from "@smithy/core";
import { ListInstanceProfilesForRoleCommand, } from "../commands/ListInstanceProfilesForRoleCommand";
import { IAMClient } from "../IAMClient";
export const paginateListInstanceProfilesForRole = createPaginator(IAMClient, ListInstanceProfilesForRoleCommand, "Marker", "Marker", "MaxItems");
