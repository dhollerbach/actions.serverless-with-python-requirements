import { createPaginator } from "@smithy/core";
import { ListRolesCommand } from "../commands/ListRolesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListRoles = createPaginator(IAMClient, ListRolesCommand, "Marker", "Marker", "MaxItems");
