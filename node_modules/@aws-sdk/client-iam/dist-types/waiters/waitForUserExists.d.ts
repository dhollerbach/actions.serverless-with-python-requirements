import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetUserCommandInput } from "../commands/GetUserCommand";
import { IAMClient } from "../IAMClient";
/**
 *
 *  @deprecated Use waitUntilUserExists instead. waitForUserExists does not throw error in non-success cases.
 */
export declare const waitForUserExists: (params: WaiterConfiguration<IAMClient>, input: GetUserCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetUserCommand for polling.
 */
export declare const waitUntilUserExists: (params: WaiterConfiguration<IAMClient>, input: GetUserCommandInput) => Promise<WaiterResult>;
