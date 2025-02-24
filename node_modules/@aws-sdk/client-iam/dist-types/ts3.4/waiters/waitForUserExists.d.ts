import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetUserCommandInput } from "../commands/GetUserCommand";
import { IAMClient } from "../IAMClient";
export declare const waitForUserExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetUserCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilUserExists: (
  params: WaiterConfiguration<IAMClient>,
  input: GetUserCommandInput
) => Promise<WaiterResult>;
