import { createPaginator } from "@smithy/core";
import { ListPolicyTagsCommand, } from "../commands/ListPolicyTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListPolicyTags = createPaginator(IAMClient, ListPolicyTagsCommand, "Marker", "Marker", "MaxItems");
