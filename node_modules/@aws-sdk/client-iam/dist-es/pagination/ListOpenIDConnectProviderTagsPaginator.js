import { createPaginator } from "@smithy/core";
import { ListOpenIDConnectProviderTagsCommand, } from "../commands/ListOpenIDConnectProviderTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListOpenIDConnectProviderTags = createPaginator(IAMClient, ListOpenIDConnectProviderTagsCommand, "Marker", "Marker", "MaxItems");
