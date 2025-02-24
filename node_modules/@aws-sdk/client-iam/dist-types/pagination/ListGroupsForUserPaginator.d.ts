import { Paginator } from "@smithy/types";
import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput } from "../commands/ListGroupsForUserCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListGroupsForUser: (config: IAMPaginationConfiguration, input: ListGroupsForUserCommandInput, ...rest: any[]) => Paginator<ListGroupsForUserCommandOutput>;
