import { createPaginator } from "@smithy/core";
import { ListMFADevicesCommand, } from "../commands/ListMFADevicesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListMFADevices = createPaginator(IAMClient, ListMFADevicesCommand, "Marker", "Marker", "MaxItems");
