import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetRoleCommandInput } from "../commands/GetRoleCommand";
import { IAMClient } from "../IAMClient";
/**
 *
 *  @deprecated Use waitUntilRoleExists instead. waitForRoleExists does not throw error in non-success cases.
 */
export declare const waitForRoleExists: (params: WaiterConfiguration<IAMClient>, input: GetRoleCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetRoleCommand for polling.
 */
export declare const waitUntilRoleExists: (params: WaiterConfiguration<IAMClient>, input: GetRoleCommandInput) => Promise<WaiterResult>;
