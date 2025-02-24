import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudFormationClient } from "../CloudFormationClient";
import { DescribeStackRefactorCommandInput } from "../commands/DescribeStackRefactorCommand";
/**
 * Wait until the stack refactor status is CREATE_COMPLETE.
 *  @deprecated Use waitUntilStackRefactorCreateComplete instead. waitForStackRefactorCreateComplete does not throw error in non-success cases.
 */
export declare const waitForStackRefactorCreateComplete: (params: WaiterConfiguration<CloudFormationClient>, input: DescribeStackRefactorCommandInput) => Promise<WaiterResult>;
/**
 * Wait until the stack refactor status is CREATE_COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStackRefactorCommand for polling.
 */
export declare const waitUntilStackRefactorCreateComplete: (params: WaiterConfiguration<CloudFormationClient>, input: DescribeStackRefactorCommandInput) => Promise<WaiterResult>;
