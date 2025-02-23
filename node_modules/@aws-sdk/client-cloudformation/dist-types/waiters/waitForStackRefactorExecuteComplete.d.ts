import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudFormationClient } from "../CloudFormationClient";
import { DescribeStackRefactorCommandInput } from "../commands/DescribeStackRefactorCommand";
/**
 * Wait until the stack refactor status is EXECUTE_COMPLETE.
 *  @deprecated Use waitUntilStackRefactorExecuteComplete instead. waitForStackRefactorExecuteComplete does not throw error in non-success cases.
 */
export declare const waitForStackRefactorExecuteComplete: (params: WaiterConfiguration<CloudFormationClient>, input: DescribeStackRefactorCommandInput) => Promise<WaiterResult>;
/**
 * Wait until the stack refactor status is EXECUTE_COMPLETE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStackRefactorCommand for polling.
 */
export declare const waitUntilStackRefactorExecuteComplete: (params: WaiterConfiguration<CloudFormationClient>, input: DescribeStackRefactorCommandInput) => Promise<WaiterResult>;
