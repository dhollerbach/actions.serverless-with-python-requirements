import { Paginator } from "@smithy/types";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetGroup: (config: IAMPaginationConfiguration, input: GetGroupCommandInput, ...rest: any[]) => Paginator<GetGroupCommandOutput>;
