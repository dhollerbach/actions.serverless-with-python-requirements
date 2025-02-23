import { createPaginator } from "@smithy/core";
import { ListSAMLProviderTagsCommand, } from "../commands/ListSAMLProviderTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListSAMLProviderTags = createPaginator(IAMClient, ListSAMLProviderTagsCommand, "Marker", "Marker", "MaxItems");
