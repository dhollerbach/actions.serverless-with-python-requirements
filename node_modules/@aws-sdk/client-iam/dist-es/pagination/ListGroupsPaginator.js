import { createPaginator } from "@smithy/core";
import { ListGroupsCommand } from "../commands/ListGroupsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListGroups = createPaginator(IAMClient, ListGroupsCommand, "Marker", "Marker", "MaxItems");
