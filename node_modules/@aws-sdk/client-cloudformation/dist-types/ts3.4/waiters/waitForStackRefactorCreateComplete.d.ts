import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudFormationClient } from "../CloudFormationClient";
import { DescribeStackRefactorCommandInput } from "../commands/DescribeStackRefactorCommand";
export declare const waitForStackRefactorCreateComplete: (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilStackRefactorCreateComplete: (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeStackRefactorCommandInput
) => Promise<WaiterResult>;
