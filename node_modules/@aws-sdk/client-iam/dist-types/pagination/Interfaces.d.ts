import { PaginationConfiguration } from "@smithy/types";
import { IAMClient } from "../IAMClient";
/**
 * @public
 */
export interface IAMPaginationConfiguration extends PaginationConfiguration {
    client: IAMClient;
}
