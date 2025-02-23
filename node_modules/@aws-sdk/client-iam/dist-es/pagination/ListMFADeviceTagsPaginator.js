import { createPaginator } from "@smithy/core";
import { ListMFADeviceTagsCommand, } from "../commands/ListMFADeviceTagsCommand";
import { IAMClient } from "../IAMClient";
export const paginateListMFADeviceTags = createPaginator(IAMClient, ListMFADeviceTagsCommand, "Marker", "Marker", "MaxItems");
