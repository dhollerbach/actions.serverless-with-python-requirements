import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetInstanceProfileCommandInput } from "../commands/GetInstanceProfileCommand";
import { IAMClient } from "../IAMClient";
export declare const waitForInstanceProfileExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilInstanceProfileExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetInstanceProfileCommandInput
) => Promise<WaiterResult>;
