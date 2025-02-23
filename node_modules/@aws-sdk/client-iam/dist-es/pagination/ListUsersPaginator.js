import { createPaginator } from "@smithy/core";
import { ListUsersCommand } from "../commands/ListUsersCommand";
import { IAMClient } from "../IAMClient";
export const paginateListUsers = createPaginator(IAMClient, ListUsersCommand, "Marker", "Marker", "MaxItems");
