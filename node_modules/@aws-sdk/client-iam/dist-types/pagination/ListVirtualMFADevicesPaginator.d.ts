import { Paginator } from "@smithy/types";
import { ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput } from "../commands/ListVirtualMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListVirtualMFADevices: (config: IAMPaginationConfiguration, input: ListVirtualMFADevicesCommandInput, ...rest: any[]) => Paginator<ListVirtualMFADevicesCommandOutput>;
