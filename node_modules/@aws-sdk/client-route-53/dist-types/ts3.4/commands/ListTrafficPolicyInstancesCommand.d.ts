import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListTrafficPolicyInstancesRequest,
  ListTrafficPolicyInstancesResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface ListTrafficPolicyInstancesCommandInput
  extends ListTrafficPolicyInstancesRequest {}
export interface ListTrafficPolicyInstancesCommandOutput
  extends ListTrafficPolicyInstancesResponse,
    __MetadataBearer {}
declare const ListTrafficPolicyInstancesCommand_base: {
  new (
    input: ListTrafficPolicyInstancesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListTrafficPolicyInstancesCommandInput,
    ListTrafficPolicyInstancesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListTrafficPolicyInstancesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListTrafficPolicyInstancesCommandInput,
    ListTrafficPolicyInstancesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListTrafficPolicyInstancesCommand extends ListTrafficPolicyInstancesCommand_base {
  protected static __types: {
    api: {
      input: ListTrafficPolicyInstancesRequest;
      output: ListTrafficPolicyInstancesResponse;
    };
    sdk: {
      input: ListTrafficPolicyInstancesCommandInput;
      output: ListTrafficPolicyInstancesCommandOutput;
    };
  };
}
