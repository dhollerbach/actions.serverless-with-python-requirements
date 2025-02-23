import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetRoleCommandInput } from "../commands/GetRoleCommand";
import { IAMClient } from "../IAMClient";
export declare const waitForRoleExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetRoleCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilRoleExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetRoleCommandInput
) => Promise<WaiterResult>;
