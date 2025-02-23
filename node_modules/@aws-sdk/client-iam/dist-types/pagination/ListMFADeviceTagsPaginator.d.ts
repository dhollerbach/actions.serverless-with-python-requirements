import { Paginator } from "@smithy/types";
import { ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput } from "../commands/ListMFADeviceTagsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListMFADeviceTags: (config: IAMPaginationConfiguration, input: ListMFADeviceTagsCommandInput, ...rest: any[]) => Paginator<ListMFADeviceTagsCommandOutput>;
