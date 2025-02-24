import { PaginationConfiguration } from "@smithy/types";
import { IAMClient } from "../IAMClient";
export interface IAMPaginationConfiguration extends PaginationConfiguration {
  client: IAMClient;
}
