import { Paginator } from "@smithy/types";
import { ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput } from "../commands/ListQueryLoggingConfigsCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListQueryLoggingConfigs: (config: Route53PaginationConfiguration, input: ListQueryLoggingConfigsCommandInput, ...rest: any[]) => Paginator<ListQueryLoggingConfigsCommandOutput>;
