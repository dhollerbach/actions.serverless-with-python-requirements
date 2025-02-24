import { createPaginator } from "@smithy/core";
import { ListInstanceProfileTagsCommand, } from "../commands/ListInstanceProfileTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListInstanceProfileTags = createPaginator(IAMClient, ListInstanceProfileTagsCommand, "Marker", "Marker", "MaxItems");
