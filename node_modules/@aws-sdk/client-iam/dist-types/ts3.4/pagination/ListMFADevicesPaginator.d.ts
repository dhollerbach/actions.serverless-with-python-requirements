import { Paginator } from "@smithy/types";
import {
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
export declare const paginateListMFADevices: (
  config: IAMPaginationConfiguration,
  input: ListMFADevicesCommandInput,
  ...rest: any[]
) => Paginator<ListMFADevicesCommandOutput>;
