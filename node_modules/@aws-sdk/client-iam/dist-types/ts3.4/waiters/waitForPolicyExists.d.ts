import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetPolicyCommandInput } from "../commands/GetPolicyCommand";
import { IAMClient } from "../IAMClient";
export declare const waitForPolicyExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetPolicyCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilPolicyExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetPolicyCommandInput
) => Promise<WaiterResult>;
