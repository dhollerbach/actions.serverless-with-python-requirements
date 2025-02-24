import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudFormationClient } from "../CloudFormationClient";
import { DescribeStackRefactorCommandInput } from "../commands/DescribeStackRefactorCommand";
export declare const waitForStackRefactorExecuteComplete: (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilStackRefactorExecuteComplete: (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
) => Promise<WaiterResult>;
