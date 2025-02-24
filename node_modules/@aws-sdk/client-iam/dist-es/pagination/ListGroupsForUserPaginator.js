import { createPaginator } from "@smithy/core";
import { ListGroupsForUserCommand, } from "../commands/ListGroupsForUserCommand";
import { IAMClient } from "../IAMClient";
export const paginateListGroupsForUser = createPaginator(IAMClient, ListGroupsForUserCommand, "Marker", "Marker", "MaxItems");
