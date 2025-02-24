import { createPaginator } from "@smithy/core";
import { ListVirtualMFADevicesCommand, } from "../commands/ListVirtualMFADevicesCommand";
import { IAMClient } from "../IAMClient";
export const paginateListVirtualMFADevices = createPaginator(IAMClient, ListVirtualMFADevicesCommand, "Marker", "Marker", "MaxItems");
