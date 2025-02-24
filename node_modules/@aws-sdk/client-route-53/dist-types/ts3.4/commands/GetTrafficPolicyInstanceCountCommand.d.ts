import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetTrafficPolicyInstanceCountRequest,
  GetTrafficPolicyInstanceCountResponse,
} from "../models/models_0";
import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53Client";
export { __MetadataBearer };
export { $Command };
export interface GetTrafficPolicyInstanceCountCommandInput
  extends GetTrafficPolicyInstanceCountRequest {}
export interface GetTrafficPolicyInstanceCountCommandOutput
  extends GetTrafficPolicyInstanceCountResponse,
    __MetadataBearer {}
declare const GetTrafficPolicyInstanceCountCommand_base: {
  new (
    input: GetTrafficPolicyInstanceCountCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetTrafficPolicyInstanceCountCommandInput,
    GetTrafficPolicyInstanceCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetTrafficPolicyInstanceCountCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetTrafficPolicyInstanceCountCommandInput,
    GetTrafficPolicyInstanceCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetTrafficPolicyInstanceCountCommand extends GetTrafficPolicyInstanceCountCommand_base {
  protected static __types: {
    api: {
      input: {};
      output: GetTrafficPolicyInstanceCountResponse;
    };
    sdk: {
      input: GetTrafficPolicyInstanceCountCommandInput;
      output: GetTrafficPolicyInstanceCountCommandOutput;
    };
  };
}
