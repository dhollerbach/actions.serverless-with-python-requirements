import { Paginator } from "@smithy/types";
import { ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput } from "../commands/ListEntitiesForPolicyCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListEntitiesForPolicy: (config: IAMPaginationConfiguration, input: ListEntitiesForPolicyCommandInput, ...rest: any[]) => Paginator<ListEntitiesForPolicyCommandOutput>;
