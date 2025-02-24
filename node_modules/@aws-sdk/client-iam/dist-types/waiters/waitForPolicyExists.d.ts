import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetPolicyCommandInput } from "../commands/GetPolicyCommand";
import { IAMClient } from "../IAMClient";
/**
 *
 *  @deprecated Use waitUntilPolicyExists instead. waitForPolicyExists does not throw error in non-success cases.
 */
export declare const waitForPolicyExists: (params: WaiterConfiguration<IAMClient>, input: GetPolicyCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPolicyCommand for polling.
 */
export declare const waitUntilPolicyExists: (params: WaiterConfiguration<IAMClient>, input: GetPolicyCommandInput) => Promise<WaiterResult>;
