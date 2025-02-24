import { createPaginator } from "@smithy/core";
import { ListRoleTagsCommand, } from "../commands/ListRoleTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListRoleTags = createPaginator(IAMClient, ListRoleTagsCommand, "Marker", "Marker", "MaxItems");
