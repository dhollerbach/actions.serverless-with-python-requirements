import { createPaginator } from "@smithy/core";
import { ListUserTagsCommand, } from "../commands/ListUserTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListUserTags = createPaginator(IAMClient, ListUserTagsCommand, "Marker", "Marker", "MaxItems");
